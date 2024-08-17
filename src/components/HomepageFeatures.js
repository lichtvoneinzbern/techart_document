import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'クリエイターへの情報提供',
    Img: require('../../static/img/softwares.png').default, // defaultを追加
    description: (
      <>
        PhotoshopやMayaなどのデザインソフト、<br/>
        OBS Studioといった配信ソフトの設定・使い方など、<br/>
        ドキュメントとして体系的にまとめています。
      </>
    ),
    imgSize: { width: 180, height: 180 },
  },
  {
    title: '現場で使える情報',
    Img: require('../../static/img/profile.png').default, // defaultを追加
    description: (
      <>
        著者自身が第一線で活動している現役クリエイターです。<br/>
        私自身ないし現場のクリエイターが実際に使用する情報をまとめます。
      </>
    ),
    imgSize: { width: 180, height: 180 },
  },
  {
    title: '情報の信頼性',
    Img: require('../../static/img/trust.png').default, // defaultを追加
    description: (
      <>
        公式ないし信頼にたる情報元が明言している内容を引用元と共に記載し、著者の主観は別枠で記述します。<br/>
        出典を明らかにすることで、確かな情報を提供します。
      </>
    ),
    imgSize: { width: 180, height: 180 },
  },

];

function Feature({ Img, title, description, imgSize }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Img} alt={title} style={{ width: imgSize.width, height: imgSize.height }} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}