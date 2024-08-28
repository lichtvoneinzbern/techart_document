# ぼかし

ぼかしフィルターは、画像の一部や全体をぼかして、柔らかくしたり、動きの効果を作り出したりするフィルターです。  
背景をぼかして被写体を際立たせたり、動いているような印象を与えることができます。

フィルターの概要、メニューの場所については[**フィルターとは？**](/docs/photoshop/filter/what_is_filter.md)を確認してください。

:::info このページについて

- **バージョン** : このページは**Photoshop 2024**の情報が記載されています。
- **情報出展元** : [**公式のリファレンスページ**](https://helpx.adobe.com/photoshop/using/filter-effects-reference.html)を参考に記載しています。具体的な参照ページが存在する場合は適宜リンクを記載します。
:::

***

## ぼかし

画像全体、もしくは選択範囲内をぼかします。

|適用前|適用後|
|:---:|:---:|
|![before](before.jpg)|![bokeh](bokeh.jpg)|

<div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
  <div style={{
    position: 'relative',
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#dddddd',
    borderRadius: '15px',
    color: 'black',
    marginRight: '10px',
    boxSizing: 'border-box',
    lineHeight: '1.4em',
  }}>
    <p style={{ 
      margin: 0, 
      display: 'block',
      lineHeight: '1.4em',
    }}>
		調整ができないのでほぼ使いません。
    </p>
    <div style={{
		position: 'absolute',
		top: '50%',
		left: '100%',
		width: 0,
		height: 0,
		borderTop: '10px solid transparent',
		borderLeft: '10px solid #dddddd',
		borderBottom: '10px solid transparent',
		transform: 'translateY(-50%)'
		}}></div>
	</div>
</div>

## ぼかし（ガウス）

画像のエッジが滑らかになり、**全体的にやわらかい印象**を与えることができます。  
特に、背景を自然にぼかしたいときや、写真全体を少しぼやけさせて優しい感じにしたいときに使います。  
メニューを選択すると以下のような画面が開くので、プレビューで確認しながら強さを設定します。  

<details>
  	<summary>設定画面</summary>

	![bokeh_gauss_setting](bokeh_gauss_setting.png)

</details>

|適用前|適用後(半径:5.0px)|
|:---:|:---:|
|![before](before.jpg)|![bokeh_gauss_5px](bokeh_gauss_5px.jpg)|

<div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
  <div style={{
    position: 'relative',
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#dddddd',
    borderRadius: '15px',
    color: 'black',
    marginRight: '10px',
    boxSizing: 'border-box',
    lineHeight: '1.4em',
  	}}>
    <p style={{ 
      margin: 0, 
      display: 'block',
      lineHeight: '1.4em',
    }}>
		結構便利なので、多用します。
    </p>
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '100%',
      width: 0,
      height: 0,
      borderTop: '10px solid transparent',
      borderLeft: '10px solid #dddddd',
      borderBottom: '10px solid transparent',
      transform: 'translateY(-50%)'
    }}></div>
  	</div>
</div>

## ぼかし（シェイプ）

特定の形を使って画像をぼかすことができます。  
たとえば、星や円などの形を選択し、その形に沿ってぼかしをかけることができます。  
形を選んだら、スライダーでぼかしの強さを調整できます。  

<details>
  	<summary>設定画面</summary>

	![bokeh_shape_setting](bokeh_shape_setting.png)
</details>


|適用前|適用後（半径:30px）|
|:---:|:---:|
|![before](before.jpg)|![bokeh_shape](<bokeh_shape.jpg>)|

<div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
  <div style={{
    position: 'relative',
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#dddddd',
    borderRadius: '15px',
    color: 'black',
    marginRight: '10px',
    boxSizing: 'border-box',
    lineHeight: '1.4em',
  }}>
    <p style={{ 
      margin: 0, 
      display: 'block',
      lineHeight: '1.4em',
    }}>
		制御が難しいです。  
		特定の状況でないと、あまり使わない印象です。
    </p>
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '100%',
      width: 0,
      height: 0,
      borderTop: '10px solid transparent',
      borderLeft: '10px solid #dddddd',
      borderBottom: '10px solid transparent',
      transform: 'translateY(-50%)'
    }}></div>
  </div>
</div>

## ぼかし（ボックス）

均等にぼかし効果を適用するフィルターです。  
指定した範囲内で直線的にぼかしをかけるため、**四角いぼかし**がかかります。  
ぼかしの強さを調整するために、半径を設定できます。

<details>
  	<summary>設定画面</summary>

	![bokeh_box_setting](bokeh_box_setting.png)
</details>

|適用前|適用後（半径:5px）|
|:---:|:---:|
|![before](before.jpg)|![bokeh_shape](<bokeh_box.jpg>)|

## ぼかし（レンズ）

カメラのレンズで撮影したときのように画像をぼかすことができます。  
レンズの前にある物体が**焦点から外れてぼやける感じ**を再現できます。  
背景をぼかしてフォーカスを合わせたい部分を目立たせることができます。  

<details>
  	<summary>設定画面</summary>

	![alt text](bokeh_lens_setting.png)
</details>

|適用前|適用後（半径:5px）|
|:---:|:---:|
|![alt text](bokeh_lens_before.jpg)|![alt text](bokeh_lens_tri.jpg)|


「虹彩絞り」の「形状」を変更すると以下のようにボケの形が変わります。
|三角形|四角形|
|:---:|:---:|
|![alt text](bokeh_lens_tri.jpg)|![alt text](bokeh_lens_cube.jpg)|

<div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
  <div style={{
    position: 'relative',
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#dddddd',
    borderRadius: '15px',
    color: 'black',
    marginRight: '10px',
    boxSizing: 'border-box',
    lineHeight: '1.4em',
  }}>
    <p style={{ 
      margin: 0, 
      display: 'block',
      lineHeight: '1.4em',
    }}>
      設定項目が、やや上級者向けです。<br /><br />
      範囲選択・レイヤー単位でフィルターをかけることで、カメラでのボケを演出できます。<br />
      夜景など、ムードのある雰囲気づくりによく使います。<br /><br />
      ![bokeh_lens_demo](bokeh_lens_demo.gif)<br />
      引用:[Sharpening recommendations](https://helpx.adobe.com/photoshop/using/adjusting-image-sharpness-blur.html)
    </p>
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '100%',
      width: 0,
      height: 0,
      borderTop: '10px solid transparent',
      borderLeft: '10px solid #dddddd',
      borderBottom: '10px solid transparent',
      transform: 'translateY(-50%)'
    }}></div>
  </div>
</div>



## ぼかし（移動）

動かしたときにできるようなボケを作るフィルターです。  
例えば、写真の全体、または一部が**速く動いているように見せたいとき**に使います。  
「角度」で方向を、「距離」で強さを設定します。  

<details>
  	<summary>設定画面</summary>

	![bokeh_move_setting](bokeh_move_setting.png)
</details>

|適用前|適用後（角度:0゜, 距離:30px）|
|:---:|:---:|
|![before](before.jpg)|![bokeh_move](bokeh_move.jpg)|

角度を変更すると、以下のようにボケの伸びる方向が変わります。

|角度:0゜|角度:90゜|
|:---:|:---:|
|![bokeh_move](bokeh_move.jpg)|![bokeh_move_90](bokeh_move_90.jpg)|

<div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
	<div style={{
		position: 'relative',
		display: 'inline-block',
		padding: '10px 20px',
		backgroundColor: '#dddddd',
		borderRadius: '15px',
		color: 'black',
		marginRight: '10px',
		boxSizing: 'border-box',
		lineHeight: '1.4em',
	}}>
		<p style={{ margin: 0, height: '100%', display: 'flex', alignItems: 'center' }}>
		ブレや速度のあるような演出を簡単に作れます。<br />部分的に多用します。
		</p>
		<div style={{
		position: 'absolute',
		top: '50%',
		left: '100%',
		width: 0,
		height: 0,
		borderTop: '10px solid transparent',
		borderLeft: '10px solid #dddddd',
		borderBottom: '10px solid transparent',
		transform: 'translateY(-50%)'
		}}></div>
	</div>
</div>

## ぼかし（強）

画像全体、もしくは選択範囲内を強くぼかします。

|適用前|適用後|
|:---:|:---:|
|![before](before.jpg)|![bokeh_hard](bokeh_hard.jpg)|

以下は「ぼかし」と「ぼかし（強）」のフィルターを100回かけた時の比較です。
「ぼかし（強）」のほうが強めにボケがかかっていることが分かります。

|ぼかし|ぼかし（強）|
|:---:|:---:|
|![bokeh](bokeh.jpg)|![bokeh_hard](bokeh_hard.jpg)|

<div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
	<div style={{
		position: 'relative',
		display: 'inline-block',
		padding: '10px 20px',
		backgroundColor: '#dddddd',
		borderRadius: '15px',
		color: 'black',
		marginRight: '10px',
		boxSizing: 'border-box',
		lineHeight: '1.4em',
	}}>
		<p style={{ margin: 0, height: '100%', display: 'flex', alignItems: 'center' }}>
		「ぼかし」同様、ほぼ使いません。
		</p>
		<div style={{
		position: 'absolute',
		top: '50%',
		left: '100%',
		width: 0,
		height: 0,
		borderTop: '10px solid transparent',
		borderLeft: '10px solid #dddddd',
		borderBottom: '10px solid transparent',
		transform: 'translateY(-50%)'
		}}></div>
	</div>
</div>

## ぼかし（詳細）

ぼかしの強さのほかに、しきい値、画質を指定できます。  
「しきい値」によって、色がどれくらい異なっていてもぼかす対象にするかを設定できます。  
また「モード」から「エッジのみ」や「エッジのオーバーレイ」を使用することで、色の境目にラインを描画することができます。

<details>
  	<summary>設定画面</summary>

	![bokeh_ditail_settings](bokeh_ditail_settings.png)
</details>

|適用前|適用後（半径:10.0, しきい値:25.0）|
|:---:|:---:|
|![before](before.jpg)|![bokeh_detail](bokeh_detail.jpg)|

「モード」を変更すると以下のような表現ができます。

|エッジのみ（半径:10.0, しきい値:80.0）|エッジのオーバーレイ（半径:10.0, しきい値:80.0）|
|:---:|:---:|
|![bokeh_detail_only_edge](bokeh_detail_only_edge.jpg)|![bokeh_detail_edge_overlay](bokeh_detail_edge_overlay.jpg)|

<div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
	<div style={{
		position: 'relative',
		display: 'inline-block',
		padding: '10px 20px',
		backgroundColor: '#dddddd',
		borderRadius: '15px',
		color: 'black',
		marginRight: '10px',
		boxSizing: 'border-box',
		lineHeight: '1.4em',
	}}>
		<p style={{ margin: 0, height: '100%', display: 'flex', alignItems: 'center' }}>
		写真からアニメ風の画像を作る時など、表面の情報を落としたいときに主に使っています。<br></br><br></br>
		画質設定を高くすると丁寧にボケを計算するため、フィルターの計算に時間がかかります。<br></br>
		ご注意ください。
		</p>
		<div style={{
		position: 'absolute',
		top: '50%',
		left: '100%',
		width: 0,
		height: 0,
		borderTop: '10px solid transparent',
		borderLeft: '10px solid #dddddd',
		borderBottom: '10px solid transparent',
		transform: 'translateY(-50%)'
		}}></div>
	</div>
</div>

## ぼかし（表面）

色の境目をつぶさないように画像をぼかします。  
ノイズやざらつき感を除去するときに役に立ちます。  
「しきい値」によって、色がどれくらい異なっていてもぼかす対象にするかを設定できます。  

<details>
  	<summary>設定画面</summary>

	![bokeh_face_setting](bokeh_face_setting.png)
</details>

|適用前|適用後（半径:10.0, しきい値:20.0）|
|:---:|:---:|
|![before](before.jpg)|![bokeh_face](bokeh_face.jpg)|

<div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
	<div style={{
		position: 'relative',
		display: 'inline-block',
		padding: '10px 20px',
		backgroundColor: '#dddddd',
		borderRadius: '15px',
		color: 'black',
		marginRight: '10px',
		boxSizing: 'border-box',
		lineHeight: '1.4em',
	}}>
		<p style={{ margin: 0, height: '100%', display: 'flex', alignItems: 'center' }}>
		写真からアニメ風の画像を作る時など、表面の情報を落としたいときに主に使っています。<br></br><br></br>
		エッジの表現や、画質を気にしないのであれば、「ぼかし（詳細）」ではなく、こちらを使っても問題ありません。<br></br>
		処理もこちらの方が断然早いです。
		</p>
		<div style={{
		position: 'absolute',
		top: '50%',
		left: '100%',
		width: 0,
		height: 0,
		borderTop: '10px solid transparent',
		borderLeft: '10px solid #dddddd',
		borderBottom: '10px solid transparent',
		transform: 'translateY(-50%)'
		}}></div>
	</div>
</div>

## ぼかし（放射状）

カメラのズームまたは回転しているように画像をぼかします。  
円状にぼかすには、「回転」を、拡大・縮小しているかのようにぼかすには、「ズーム」を選択します。

<details>
  	<summary>設定画面</summary>

	![bokeh_face_setting](bokeh_face_setting.png)
</details>

|適用前|適用後（量:10, 方法:回転）|
|:---:|:---:|
|![before](before.jpg)|![bokeh_rad](bokeh_rad.jpg)|

|回転（量:10）|ズーム（量:30）|
|:---:|:---:|
|![bokeh_rad](bokeh_rad.jpg)|![bokeh_rad_zoom](bokeh_rad_zoom.jpg)|

<div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
	<div style={{
		position: 'relative',
		display: 'inline-block',
		padding: '10px 20px',
		backgroundColor: '#dddddd',
		borderRadius: '15px',
		color: 'black',
		marginRight: '10px',
		boxSizing: 'border-box',
		lineHeight: '1.4em',
	}}>
		<p style={{ margin: 0, height: '100%', display: 'flex', alignItems: 'center' }}>
		かなり特徴的なブレ表現を加えることができます。<br></br>
		場面は限定されますが、ぼかしの中では使用頻度で上位にきます。
		</p>
		<div style={{
		position: 'absolute',
		top: '50%',
		left: '100%',
		width: 0,
		height: 0,
		borderTop: '10px solid transparent',
		borderLeft: '10px solid #dddddd',
		borderBottom: '10px solid transparent',
		transform: 'translateY(-50%)'
		}}></div>
	</div>
</div>

## 平均

画像全体または選択範囲を平均的な色で塗りつぶします。  
例えば、ほとんどの色が緑色の草を選択して適用すると、全体が一色の緑に変わります。

|適用前|適用後（選択範囲を指定）|
|:---:|:---:|
|![before](before.jpg)|![bokeh_ave](bokeh_ave.jpg)|


<div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
	<div style={{
		position: 'relative',
		display: 'inline-block',
		padding: '10px 20px',
		backgroundColor: '#dddddd',
		borderRadius: '15px',
		color: 'black',
		marginRight: '10px',
		boxSizing: 'border-box',
		lineHeight: '1.4em',
	}}>
		<p style={{ margin: 0, height: '100%', display: 'flex', alignItems: 'center' }}>
		ほぼ使いません。<br></br>
		一律で塗りたい場合は「塗りつぶし」を使いますし、<br></br>
		このぼかしを使うことは極めて限定的だと思います。
		</p>
		<div style={{
		position: 'absolute',
		top: '50%',
		left: '100%',
		width: 0,
		height: 0,
		borderTop: '10px solid transparent',
		borderLeft: '10px solid #dddddd',
		borderBottom: '10px solid transparent',
		transform: 'translateY(-50%)'
		}}></div>
	</div>
</div>