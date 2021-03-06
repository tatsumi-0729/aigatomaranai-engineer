---
title: Java Core APIを読む（split編）
date: "2022-04-18T00:00:00.000Z"
template: "post"
draft: true
slug: "Java Core APIを読む"
category: "テック"
tags:
  - "Java Core APIを読む"
  - "oss"
description: "今回は「Java Core APIを読む」の第一弾として、splitメソッドを読みたいと思います。
普段何気なく使っているものがどういう作りになっているのか、どういうコードが書かれているの知りたい。という理由による試みです。"
socialImage: "/media/image-2.jpg"
---
# 何故「Java Core APIを読む」のか。
理由は単純で、コーディングスキルを伸ばしたいからです。<br>

というのも、ある程度動くものが作れるようになった時の次のステップとして、より良いコードを書けるようになる。ということが挙げられるかと思います。（より良いコードの定義は今回は省略します…。）<br>
そうなった時に、今回のJava Core APIは勿論、OSSを読むということは最適なのかなと考えています。<br>
実際に世界中で沢山の人々に使われているものは、どんな風にコードが書かれ、どう最適化されているのかなど、先人が作り上げたものからは沢山のことが学べると思います。<br>

勿論OSSを読む以外にも、書籍やネットなどで、オブジェクト指向について学ぶ、コーディング原則について学ぶなどもあると思いますが。

# 実際に読んでみる。
早速ですが、splitメソッドはJava.lang.Stringクラスに2つ存在します。

- splitメソッド①
```Java
public String[] split(String regex) {
    return split(regex, 0);
}
```

- splitメソッド②
```Java
public String[] split(String regex, int limit) {
        /* fastpath if the regex is a
         * (1) one-char String and this character is not one of the
         *     RegEx's meta characters ".$|()[{^?*+\\", or
         * (2) two-char String and the first char is the backslash and
         *     the second is not the ascii digit or ascii letter.
         */
        char ch = 0;
        if (((regex.length() == 1 &&
             ".$|()[{^?*+\\".indexOf(ch = regex.charAt(0)) == -1) ||
             (regex.length() == 2 &&
              regex.charAt(0) == '\\' &&
              (((ch = regex.charAt(1))-'0')|('9'-ch)) < 0 &&
              ((ch-'a')|('z'-ch)) < 0 &&
              ((ch-'A')|('Z'-ch)) < 0)) &&
            (ch < Character.MIN_HIGH_SURROGATE ||
             ch > Character.MAX_LOW_SURROGATE))
        {
            int off = 0;
            int next = 0;
            boolean limited = limit > 0;
            ArrayList<String> list = new ArrayList<>();
            while ((next = indexOf(ch, off)) != -1) {
                if (!limited || list.size() < limit - 1) {
                    list.add(substring(off, next));
                    off = next + 1;
                } else {    // last one
                    //assert (list.size() == limit - 1);
                    int last = length();
                    list.add(substring(off, last));
                    off = last;
                    break;
                }
            }
            // If no match was found, return this
            if (off == 0)
                return new String[]{this};

            // Add remaining segment
            if (!limited || list.size() < limit)
                list.add(substring(off, length()));

            // Construct result
            int resultSize = list.size();
            if (limit == 0) {
                while (resultSize > 0 && list.get(resultSize - 1).isEmpty()) {
                    resultSize--;
                }
            }
            String[] result = new String[resultSize];
            return list.subList(0, resultSize).toArray(result);
        }
        return Pattern.compile(regex).split(this, limit);
    }
```

例えば、以下の様にsplitメソッド①を呼び出した場合、結局はsplitメソッド②に移譲される訳ですね。
```Java
	public static void main(String[] args) {
		String test = "a,b,c";
		List<String> testList = Arrays.asList(test.split(","));
		testList.stream().forEach(s -> System.out.println(s));
	}
```

因みに、上記の実行結果は以下です。
```Java
a
b
c
```

で、具体的に見ていくと、初っ端大量のif分の条件式が目に入ってきますね。
```Java
        if (((regex.length() == 1 &&
             ".$|()[{^?*+\\".indexOf(ch = regex.charAt(0)) == -1) ||
             (regex.length() == 2 &&
              regex.charAt(0) == '\\' &&
              (((ch = regex.charAt(1))-'0')|('9'-ch)) < 0 &&
              ((ch-'a')|('z'-ch)) < 0 &&
              ((ch-'A')|('Z'-ch)) < 0)) &&
            (ch < Character.MIN_HIGH_SURROGATE ||
             ch > Character.MAX_LOW_SURROGATE))
        {
```