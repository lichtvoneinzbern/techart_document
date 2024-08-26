# 汎用スクリプト

このページでは、mayaでよく使用するPythonスクリプトをまとめます。  
項目は操作対象ごとに分けます。

:::info このページについて

- **ページ更新時期** : このページは**2024年8月**に執筆しています。現状と内容が異なる場合があります。
- **Mayaバージョン** : このページは**Maya 2024.2**の情報が記載されています。
- **Pythonバージョン** : このページは**Python 3.10.8**の情報が記載されています。
:::

## 一般

### Pythonのバージョンを取得

```python title="get_python_version"
import sys

version_info = sys.version_info

major = version_info.major
minor = version_info.minor
micro = version_info.micro
releaselevel = version_info.releaselevel
serial = version_info.serial

print(f"{major}.{minor}.{micro} : {releaselevel} {serial}")
```

<details>
  	<summary>出力例</summary>

	3.10.8 : final 0

</details>

***

### 選択されているメッシュをリストで取得（子階層を含む）

```python title="get_selected_meshes"
import maya.cmds as cmds
from typing import Optional

def get_selected_meshes(name_filter: Optional[str] = None) -> list:
    """
    Retrieves all selected mesh objects, including those in child hierarchies.
    
    Args:
        name_filter (Optional[str]): A substring to filter the mesh names. 
            Only meshes containing this substring will be returned. If not provided, all selected meshes are returned.

    Returns:
        list: A list of selected mesh objects that match the given filter.
    """
    selected_objects = cmds.ls(sl=True, dag=True, typ='mesh')

    if name_filter:
        selected_objects = [obj for obj in selected_objects if name_filter in obj]

    return selected_objects

result = get_selected_meshes()
print(result)
```

<details>
  	<summary>出力例</summary>

	['M_head', 'M_body']

</details>
