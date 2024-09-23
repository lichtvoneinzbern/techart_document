# 画像生成AI プロンプト一覧

このページでは、画像生成AIで使用するプロンプトをまとめています。

## Pony系テンプレート

#### Positive

```box
(zPDXL3),score_9,score_8_up,score_7_up,score_6_up,
```
事前にEasyNegative系のLoraとして、[「**Pony PDXL Negative Embeddings**」](https://civitai.com/models/332646/pony-pdxl-negative-embeddings)を導入しておきます。

#### Negative

```box
score_1,score_2,score_3,score_4,source_pony,source_furry,monochrome,3d,photo,hyperrealistic,realistic,rough sketch,fewer digits,extra digits,signature,artist name,
```

## 構図

### カメラ

#### 正面

```box
front view,
```

#### 俯瞰

```box
from above,
```

#### アオリ

```box
from below,
```

#### 傾ける

```box
dutch angle,
```

#### 主観

```box
POV,
```

### キャラ

#### 顔を強調

```box
face focus,
```

#### 肩から頭

```box
portrait,
```

#### 胸から頭

```box
upper body,
```

#### 腰から頭

```box
cowboy shot,
```

#### 全身

```box
full body,
```

## キャラクター

### 姿勢

#### 立つ

```box
standing,
```

#### 前傾

```box
leaning forward,
```

#### しゃがむ

```box
squatting,
```

#### 座る

```box
sitting,
```

#### 椅子に座る

```box
sitting on chair,
```

#### 体育座り

```box
own hugging feet,
```

#### 女の子座り

```box
wariza,
```

#### ベッドの上で寝る

```box
lie on bed,
```

#### 四つん這い

```box
all fours,
```

#### お尻を突き出す

```box
doggystyle,
```

#### 片腕を上げる

```box
arm up,
```

#### 両腕を上げる

```box
arms up,
```

#### 腕を組む

```box
crossed arms,
```

### 表情

#### 笑顔

```box
smile,
```

#### 悲しみ

```box
smile,
```

#### 怒り

```box
angry,
```

#### 目閉じ

```box
eyes closed,
```

#### ウインク

```box
one eye closed,
```

### 目線

#### カメラ目線

```box
look at viewer,
```

#### 上目遣い

```box
looking up,
```

#### 見下げる

```box
looking down,
```

#### 振り返る

```box
looking back,
```

## 参考
- [**【Stable Diffusion】 ポーズや構図に関するプロンプト（呪文一覧）**](https://hikari-aiart.com/stablediffusion-pronpt-pose/)
- [**Stable DiffusionやNovelAIなどで使う呪文を集めたスプレッドシート（またはテキスト）**](https://note.com/ryon3/n/n5c5c2f79c596)
- [**Stable Diffusion 備忘録-プロンプト集**](https://note.com/__acri/n/na79388193608#fbd27f0b-3b07-479f-ac86-303c216fca69)