# 環境変数

このページでは、環境変数の取得方法について解説します。

:::info このページについて

- **ページ更新時期** : このページは**2024年8月**に執筆しています。現状と内容が異なる場合があります。
- **バージョン** : このページはMaya 2024.2の情報が記載されています。
- **情報出展元** : [**公式のヘルプページ**](https://help.autodesk.com/view/MAYAUL/2024/ENU/?guid=GUID-925EB3B5-1839-45ED-AA2E-3184E3A45AC7)を参考に記載しています。具体的な参照ページが存在する場合は適宜リンクを記載します。
:::

## プラグインパス

作成したプラグインの保存されているパスをMayaのプラグインパスに通すことで、以下のようなことを実現できます。

- カスタムプラグインのロード
- プロジェクト固有のプラグイン利用
- 開発中プラグインのテスト:
- プラグインのアンロードとロード
- 自動ロードプラグインの管理
- サードパーティ製プラグインのインストール
- スクリプトやツールの拡張

以下のPythonコマンドを使用することで取得します。

```python title="print_maya_plugin_paths"
import os

plugin_paths = os.getenv("MAYA_PLUG_IN_PATH").split(os.pathsep)

for path in plugin_paths:
    print(path)
```

<details>  
  	<summary>出力サンプル</summary>  

		C:/Users/owner/Documents/maya/2024/plug-ins  
		C:/Users/owner/Documents/maya/plug-ins  
		C:/Program Files/Autodesk/Maya2024/bin/plug-ins  
		C:/Program Files/Autodesk/Maya2024/plug-ins/ATF/plug-ins  
		C:/Program Files/Autodesk/Bifrost/Maya2024/2.7.1.1/bifrost/plug-ins  
		C:/Program Files/Common Files/Autodesk/ApplicationPlugins/bifrost/Contents/plug-ins  
		C:/Program Files/Autodesk/LookdevX/Maya/2024/1.2.0/plug-ins/lookdevx/plug-ins  
		C:/Program Files/Autodesk/Maya2024/plug-ins/MASH/plug-ins  
		C:/Program Files/Autodesk/MayaUSD/Maya2024/0.25.0/mayausd/MayaUSD/lib/maya  
		C:/Program Files/Autodesk/MayaUSD/Maya2024/0.25.0/mayausd/MayaUSD/plugin/adsk/plugin  
		C:/Program Files/Autodesk/Bifrost/Maya2024/2.7.1.1/bifrost/null  
		C:/Program Files/Autodesk/Maya2024/plug-ins/fbx/plug-ins  
		C:/Program Files/Autodesk/Maya2024/plug-ins/camd/plug-ins  
		C:/Program Files/Autodesk/Arnold/maya2024/plug-ins  
		C:/Program Files/Allegorithmic/Adobe Substance 3D for Maya/2024/plug-ins  
		C:/Program Files/Autodesk/Maya2024/plug-ins/sweep/plug-ins  
		C:/Program Files/Autodesk/Bifrost/Maya2024/2.7.1.1/vnn/plug-ins  
		C:/Program Files/Autodesk/Maya2024/plug-ins/xgen/plug-ins  
</details>

## スクリプトパス

作成したスクリプトの保存されているパスをMayaのスクリプトパスに通すことで、以下のようなことを実現できます。

- カスタムスクリプトの自動読み込み
- Mayaのスタートアップスクリプトの実行
- 外部ライブラリの利用
- スクリプトエディタからの呼び出し
- Mayaのカスタムメニューの追加

以下のPythonコマンドを使用することで取得します。

```python title="print_maya_script_paths"
import os

script_paths = os.getenv("MAYA_SCRIPT_PATH").split(os.pathsep)

for path in script_paths:
    print(path)
```

<details>
  	<summary>出力サンプル</summary>

		C:/Users/owner/Documents/maya/projects/default/scripts  
		C:/Users/owner/Documents/maya/2024/scripts  
		C:/Users/owner/Documents/maya/scripts  
		C:/Users/owner/Documents/maya/2024/presets  
		C:/Users/owner/Documents/maya/2024/prefs/shelves  
		C:/Users/owner/Documents/maya/2024/prefs/markingMenus  
		C:/Users/owner/Documents/maya/2024/prefs/scripts  
		C:/Program Files/Autodesk/Maya2024/scripts  
		C:/Program Files/Autodesk/Maya2024/scripts/startup  
		C:/Program Files/Autodesk/Maya2024/scripts/shelves  
		C:/Program Files/Autodesk/Maya2024/scripts/others  
		C:/Program Files/Autodesk/Maya2024/scripts/AETemplates  
		C:/Program Files/Autodesk/Maya2024/scripts/unsupported  
		C:/Program Files/Autodesk/Maya2024/scripts/paintEffects  
		C:/Program Files/Autodesk/Maya2024/scripts/fluidEffects  
		C:/Program Files/Autodesk/Maya2024/scripts/hair  
		C:/Program Files/Autodesk/Maya2024/scripts/cloth  
		C:/Program Files/Autodesk/Maya2024/scripts/live  
		C:/Program Files/Autodesk/Maya2024/scripts/fur  
		C:/Program Files/Autodesk/Maya2024/scripts/muscle  
		C:/Program Files/Autodesk/Maya2024/scripts/turtle  
		C:/Program Files/Autodesk/Maya2024/scripts/FBX  
		C:/Program Files/Autodesk/Maya2024/scripts/mayaHIK  
		C:/Program Files/Autodesk/Maya2024/plug-ins/ATF/scripts  
		C:/Program Files/Autodesk/Bifrost/Maya2024/2.7.1.1/bifrost/scripts  
		C:/Program Files/Common Files/Autodesk/ApplicationPlugins/bifrost/Contents/scripts  
		C:/Program Files/Autodesk/LookdevX/Maya/2024/1.2.0/plug-ins/lookdevx/scripts  
		C:/Program Files/Autodesk/Maya2024/plug-ins/MASH/scripts  
		C:/Program Files/Autodesk/MayaUSD/Maya2024/0.25.0/mayausd/MayaUSD/plugin/adsk/scripts  
		C:/Program Files/Autodesk/MayaUSD/Maya2024/0.25.0/mayausd/MayaUSD/lib/scripts  
		C:/Program Files/Autodesk/MayaUSD/Maya2024/0.25.0/mayausd/USD/lib/python  
		C:/Program Files/Autodesk/Maya2024/plug-ins/fbx/scripts  
		C:/Program Files/Autodesk/Maya2024/plug-ins/camd/scripts  
		C:/Program Files/Autodesk/Arnold/maya2024/scripts  
		C:/Program Files/Allegorithmic/Adobe Substance 3D for Maya/2024/scripts  
		C:/Program Files/Autodesk/Maya2024/plug-ins/sweep/scripts  
		C:/Program Files/Autodesk/Bifrost/Maya2024/2.7.1.1/vnn/scripts  
		C:/Program Files/Autodesk/Maya2024/plug-ins/xgen/scripts  
		C:/Program Files/Autodesk/LookdevX/Maya/2024/1.2.0/plug-ins/lookdevx/AEtemplate  
		C:/Program Files/Autodesk/MayaUSD/Maya2024/0.25.0/mayausd/MayaUSD/lib/python  
		C:/Program Files/Autodesk/Arnold/maya2024/scripts/mtoa/mel  
</details>

## モジュールパス

作成したモジュール（.mod）ファイルの保存されているパスをMayaのモジュールパスに通すことで、以下のようなことを実現できます。

- プラグインの自動読み込み
- モジュールベースの管理
- 依存関係の自動解決
- カスタムパスの設定
- 複数の環境に切り替え
- ユーザー/チーム間での統一環境作成

以下のPythonコマンドを使用することで取得します。

```python title="print_maya_module_paths"
import os

module_paths = os.getenv("MAYA_MODULE_PATH").split(os.pathsep)

for path in module_paths:
    print(path)
```

<details>  
  	<summary>出力サンプル</summary>  

		C:/Program Files/Autodesk/Maya2024/modules  
		C:/Users/owner/Documents/maya/2024/modules  
		C:/Users/owner/Documents/maya/modules  
		C:/Program Files/Common Files/Autodesk Shared/Modules/maya/2024  
</details>



