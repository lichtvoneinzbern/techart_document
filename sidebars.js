module.exports = {
	// sidebar: [{type: 'autogenerated', dirName: '.'}],

	sidebar: [
		"intro",
		{
			type: 'category',
			label: '🧊 Maya',
			link: {
				type: 'generated-index',
				title: 'Maya',
				description: '以下のページでは、Autodesk Maya（オートデスク マヤ）について解説しています。',
			},
			items: [
				'maya/what_is_maya',
				'maya/open_source_components',
				'maya/asset_for_unreal_engine',
				'maya/devkit',
			],
		},
		{
			type: 'category',
			label: '🖌️ Substance 3D Painter',
			link: {
				type: 'generated-index',
				title: 'Substance 3D Painter',
				description: '以下のページでは、Adobe Substance 3D Painter（アドビ サブスタンス スリーディー ペインター）について解説しています。',
			},
			items: [
				'substance_3d_painter/what_is_substance_3d_painter'
			],
		},
		{
			type: 'category',
			label: '🎮 Unreal Engine',
			link: {
				type: 'generated-index',
				title: 'Unreal Engine',
				description: '以下のページでは、Unreal Engine（アンリアルエンジン）について解説しています。',
			},
			items: [
				'unreal_engine/what_is_unreal_engine'
			],
		},
		{
			type: 'category',
			label: '🎨 Photoshop',
			link: {
				type: 'generated-index',
				title: 'Photoshop',
				description: '以下のページでは、Adobe社製品のPhotoshop（フォトショップ）について解説しています。',
			},
			items: [
				'photoshop/what_is_photoshop',
			],
		},
		{
			type: 'category',
			label: '📡 OBS Studio',
			link: {
				type: 'generated-index',
				title: 'OBS Studio',
				description: '以下のページでは、OBS Studio（オービーエススタジオ）について解説しています。',
			},
			items: [
				'obs_studio/what_is_obs',
				'obs_studio/how_to_install',
			],
		},
		"terms_of_service",
		"sandbox",
	],
};
