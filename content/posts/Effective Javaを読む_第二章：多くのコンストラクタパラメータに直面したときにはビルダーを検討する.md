---
title: Effective Javaを読む　第2章：多くのコンストラクタパラメータに直面したときにはビルダーを検討する
date: "2022-04-19T00:00:00.000Z"
template: "post"
draft: true
slug: "Effective Javaを読む"
category: "読書感想文"
tags:
  - "Java"
  - "Effective Java"
description: "今回は「Effective Javaを読む」の第2章：多くのコンストラクタパラメータに直面したときにはビルダーを検討するを読みたいと思います。"
socialImage: "/media/Effective Javaを読む/Effective Java 表紙.jpg"
---
今回読むのは、Effective Java 第3版 **第2章：多くのコンストラクタパラメータに直面したときにはビルダーを検討する** です。

![Effective Java 表紙.jpg](/media/Effective Javaを読む/Effective Java 表紙.jpg)
## 要約
コンストラクタやstaticファクトリメソッドが、多くのパラメータを持つクラスを設計する場合は、以下のようにビルダーパターンを用いることが好ましい。<br>
```Java
// ビルダーパターン
public class NutritionFacts {
	private final int servingSize;
	private final int servings;
	private final int calories;
	private final int fat;
	private final int sodium;
	private final int carbohydrate;

	public static class Builder {
		// 必須パラメータ
		private final int servingSize;
		private final int servings;

		// オプションパラメータ
		private int calories = 0;
		private int fat = 0;
		private int carbohydrate = 0;
		private int sodium = 0;

		public Builder(int servingSize, int servings) {
			this.servingSize = servingSize;
			this.servings = servings;
		}

		public Builder calories(int val) {
			calories = val;
			return this;
		}

		public Builder fat(int val) {
			fat = val;
			return this;
		}

		public Builder sodium(int val) {
			sodium = val;
			return this;
		}

		public Builder carbohydrate(int val) {
			carbohydrate = val;
			return this;
		}

		public NutritionFacts build() {
			return new NutritionFacts(this);
		}
	}

	private NutritionFacts(Builder builder) {
		this.servingSize = builder.servingSize;
		this.servings = builder.servings;
		this.calories = builder.calories;
		this.fat = builder.fat;
		this.sodium = builder.sodium;
		this.carbohydrate = builder.carbohydrate;
	}
}
```
```Java
// クライアント側
public class Main {
	public static void main(String[] args) {
		NutritionFacts cola = new NutritionFacts.Builder(240, 8)
                .calories(100)
                .sodium(35)
                .carbohydrate(27)
                .build();
	}
}
```

こうするメリットとしては以下がある。
1. 各パラメータは、それ独自のメソッドで指定できるため、複数の可変長パラメータを持てる
1. 複数のオブジェクトを生成する際は、1つのビルダーを使いまわせるので柔軟性が高い
1. クライアント側はテレスコーピングパターン（パラメータの順序に依存するコンストラクタ）、JavaBeansパターン（セッターを用いて生成されるコンストラクタ）で生成するよりも、読みやすく書きやすく、そして安全

デメリットとしては以下がある。
1. オブジェクトをテレスコーピングパターン、JavaBeansパターンよりも、コードが長くなる
1. オブジェクトをテレスコーピングパターン、JavaBeansパターンよりも、パフォーマンスに欠ける

## 感想
私自身も開発の中でコンストラクタのパラメータが10個も20個もあるようなコンストラクタに遭遇したことがあります…。<br>
実際パラメータの順序を間違えましたし、割とストレスフルだった記憶がありますね。笑（eclipse君の静的チェックが助けてくれましたが）<br>
とはいえ、じゃあ改修してビルダーに！なんてそうは問屋が卸さず。<br>
その頃にはそのコンストラクタの影響範囲たるやなんたるやで、追加しても結局使われず、使われたとしてもテレスコーピングパターンとビルダーが混在してしまい、逆にわかりずらくなってメリットが薄かったり。<br>

そういう意味ではやはり、設計段階でビルダーを適用するラインを決めて、将来に備えておきたいななんて思います。<br>
ゼロコンマ1秒でもパフォーマンスを高めたいなんてプロジェクトではない限り、初期段階からビルダーでやっていくっていうのは、クライアント側の簡潔さや、実装ミスの可能性が少なくなるという点で良いんじゃないかと思います。（jsライクなメソッドチェーンもなんかカッコいいですよね。笑）<br>
statsicファクトリ同様ですが、勿論、やはりチームメンバーの認知度や力量を考慮した上での話だとは思いますが。