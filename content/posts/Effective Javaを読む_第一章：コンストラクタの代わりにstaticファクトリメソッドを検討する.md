---
title: Effective Javaを読む　第1章：コンストラクタの代わりにstaticファクトリメソッドを検討する
date: "2022-04-18T00:00:00.000Z"
template: "post"
draft: false
slug: "Effective Javaを読む　第1章：コンストラクタの代わりにstaticファクトリメソッドを検討する"
category: "読書感想文"
tags:
  - "Java"
  - "Effective Java"
description: "今回は「Effective Javaを読む」の第1章：コンストラクタの代わりにstaticファクトリメソッドを検討するを読みたいと思います。"
socialImage: "/media/Effective Javaを読む/Effective Java 表紙.jpg"
---
今回読むのは、Effective Java 第3版 **第1章：コンストラクタの代わりにstaticファクトリメソッドを検討する** です。

![Effective Java 表紙.jpg](/media/Effective Javaを読む/Effective Java 表紙.jpg)
## 要約
クラスのインスタンスを取得する必要がある場合は、newするのではなく、例えば以下のようなstaticファクトリメソッドを使うことが好ましい。<br>
```Java
public class Greet {
	private static Greet greet = new Greet();

	// staticファクトリメソッド
	public static Greet getInstanse() {
		return greet;
	}
}
```
```Java
// クライアント側
public class Main {
	public static void main(String[] args) {
		Greet greet = Greet.getInstanse();
	}
}
```

こうするメリットとしては以下がある。
1. 名前が付けられて、どういうオブジェクトを取得するのかが分かり易くなる
1. オブジェクトの生成が一度で済む
1. メソッドの戻り値型の任意のサブオブジェクトを返せる
1. 返されるオブジェクトのクラスは、入力パラメータに応じて変えられる
1. 返されるオブジェクトのクラスは、そのstaticファクトリメソッドを含むクラスが書かれた時点で存在する必要さえない

デメリットとしては以下がある。
1. publicあるいはprotectedのコンストラクタを持たないクラスのサブクラスは作れない
1. プログラマがstaticファクトリメソッドを見つけることが難しい

## 感想
実際に自作したクラスにstaticファクトリメソッドを適用する場合は、以下の様にシングルトンにすることで、完全にnew出来ないようにすると良いなと感じました。
```Java
public class Greet {
	private static Greet greet = new Greet();

	// シングルトン
	private Greet(){}

	// staticファクトリメソッド
	public static Greet getInstanse() {
		return greet;
	}
}
```
こうすることで、誤ってnewしてしまいstaticファクトリのうまみを書き消してしまう。なんて事は起こらないかなと思います。<br>

staticファクトリについては以前から知っていましたが、個人的には、コンストラクタの種類や引数が多いと分かりずらく、実装ミスに繋がる可能性が軽減される点や、オブジェクトの生成が一度で済むことによるパフォーマンスの向上、結合度が下がってテストがし易くなる点などなど…、様々に魅力に感じているので、staticファクトリを推していきたいところです。

が、チーム開発の際は注意が必要そうです。<br>
デメリットにもあるように、プログラマがどれがstaticファクトリメソッドなのか認識するのが難しかったり、そもそもstaticファクトリメソッドをチームメンバーが知らなくて、逆に開発効率や以降のメンテナンス性に影響を与えるなんてこともあるかと思うので、用いるかどうかはチームメンバーの力量等含め、話し合った上で決めたいと考えています。