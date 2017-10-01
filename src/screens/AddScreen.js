import React, { Component } from 'react';
import _ from 'lodash';
import { View, Image, Text, StyleSheet, FlatList, ListView, ScrollView } from 'react-native';
import Video from 'react-native-video';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AvView from '../AvView';
import GridView from 'react-native-grid-view';

const flashList = [
  {
    key: 1,
    username: 'james',
    type: 'video',
    source: 'https://ccs3.akamaized.net/cchanclips/e1bb9e32e2184b119a1ea010bd59bc52/clip.mp4',
    avatarUrl: 'https://unsplash.it/100?image=1005',
  },
];

const gridList = [
  {
    key: 2,
    username: 'jennifer',
    type: 'image',
    source: 'https://p.limia.jp/resize/sm1/images/39953/gallery/22337/79a5327085d18df7ce147f439b8a05ae.jpg',
    avatarUrl: 'https://unsplash.it/100?image=1027',
  },
  {
    key: 3,
    username: 'jennifer',
    type: 'image',
    source: 'https://scontent-nrt1-1.cdninstagram.com/t51.2885-15/e35/12965072_1760356260862610_1579051254_n.jpg',
    avatarUrl: 'https://unsplash.it/100?image=1027',
  },
  {
    key: 4,
    username: 'jennifer',
    type: 'image',
    source: 'https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12816919_971554389588698_1141072357_n.jpg?ig_cache_key=MTIyMDg3ODk0MjA1MjYyNjgyMw%3D%3D.2',
    avatarUrl: 'https://unsplash.it/100?image=1027',
  },
  {
    key: 5,
    username: 'jennifer',
    type: 'image',
    source: 'https://scontent-nrt1-1.cdninstagram.com/t51.2885-15/e35/12105044_1507672059558266_572361402_n.jpg',
    avatarUrl: 'https://unsplash.it/100?image=1027',
  },
  {
    key: 6,
    username: 'jennifer',
    type: 'image',
    source: 'https://scontent-nrt1-1.cdninstagram.com/t51.2885-15/e35/12965072_1760356260862610_1579051254_n.jpg',
    avatarUrl: 'https://unsplash.it/100?image=1027',
  },
  {
    key: 7,
    username: 'jennifer',
    type: 'image',
    source: 'https://cdn7.roomclip.jp/v1/1536/roomclip-bucket/img_1536/2c42c0a6efd3cf694c8f20e8a0d0e504dc1a800d.jpg',
    avatarUrl: 'https://unsplash.it/100?image=1027',
  },
  {
    key: 8,
    username: 'jennifer',
    type: 'image',
    source: 'https://cdn7.roomclip.jp/v1/1536/roomclip-bucket/img_1536/2c42c0a6efd3cf694c8f20e8a0d0e504dc1a800d.jpg',
    avatarUrl: 'https://unsplash.it/100?image=1027',
  },
  {
    key: 9,
    username: 'jennifer',
    type: 'image',
    source: 'https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/16465474_366505180414891_1288606453564702720_n.jpg',
    avatarUrl: 'https://unsplash.it/100?image=1027',
  },
  {
    key: 10,
    username: 'jennifer',
    type: 'image',
    source: 'https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/15876148_721475174693708_5802585672564867072_n.jpg',
    avatarUrl: 'https://unsplash.it/100?image=1027',
  },
  {
    key: 11,
    username: 'jennifer',
    type: 'image',
    source: 'https://p.limia.jp/resize/sm1/images/39953/gallery/22337/79a5327085d18df7ce147f439b8a05ae.jpg',
    avatarUrl: 'https://unsplash.it/100?image=1027',
  },
  {
    key: 12,
    username: 'jennifer',
    type: 'image',
    source: 'https://cdn.roomclip.jp/roomclip-bucket/img_640/23a4324211c566e15d807ec57e7d0c783c9f35a9.jpg',
    avatarUrl: 'https://unsplash.it/100?image=1027',
  },
  {
    key: 13,
    username: 'jennifer',
    type: 'image',
    source: 'https://p.limia.jp/resize/sm1/images/39953/gallery/22337/79a5327085d18df7ce147f439b8a05ae.jpg',
    avatarUrl: 'https://unsplash.it/100?image=1027',
  },

  // {
  //   key: 3,
  //   username: 'cathy',
  //   type: 'video',
  //   source: 'https://github.com/saitoxu/InstaClone/raw/master/contents/videos/sky.mov',
  //   avatarUrl: 'https://unsplash.it/100?image=996',
  // },
  // {
  //   key: 4,
  //   username: 'zack',
  //   type: 'image',
  //   source: 'https://github.com/saitoxu/InstaClone/raw/master/contents/images/landscape.jpg',
  //   avatarUrl: 'https://unsplash.it/100?image=856',
  // },
  // {
  //   key: 5,
  //   username: 'luke',
  //   type: 'image',
  //   source: 'https://github.com/saitoxu/InstaClone/raw/master/contents/images/snow.jpg',
  //   avatarUrl: 'https://unsplash.it/100?image=669',
  // },
  // {
  //   key: 6,
  //   username: 'anna',
  //   type: 'video',
  //   source: 'https://github.com/saitoxu/InstaClone/raw/master/contents/videos/garden.mov',
  //   avatarUrl: 'https://unsplash.it/100?image=823',
  // },
  // {
  //   key: 7,
  //   username: 'ken',
  //   type: 'image',
  //   source: 'https://github.com/saitoxu/InstaClone/raw/master/contents/images/town.jpg',
  //   avatarUrl: 'https://unsplash.it/100?image=550',
  // }
];

export default class AddScreen extends Component {
  _renderItem(item) {
    return (
      <AvView
        type={item.type}
        source={item.source}
        key={item.key}
      />
    );
  }

  _flashList() {
    return (
      <FlatList
        style={{ flex: 1 }}
        data={flashList}
        renderItem={({ item }) => (
          <View key={item.key}>
            <AvView type={item.type} source={item.source} />
          </View>
        )}
      />
    );
  }


  render() {
    return (
      <ScrollView>
        <View style={{backgroundColor: 'white', flexDirection: 'row', borderWidth: 1 }}>
          {this._flashList()}
        </View>
        <View style={{backgroundColor: 'white', marginTop: 20, marginBottom: 20}}>
          <View style={{backgroundColor: 'white', flexDirection: 'row' }}>
            <Text style={{ fontSize: 15, height: 20, lineHeight: 20, marginLeft: 20, marginTop:6, marginBottom: 10}}>すのこで作れる簡単傘立て♪</Text>
          </View>
          <View style={{backgroundColor: 'white', flexDirection: 'row' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 12, height: 20, lineHeight: 20, marginLeft:20, marginTop:5}}>作業目安：</Text>
            <Text style={{ fontSize: 12, height: 20, lineHeight: 20, marginTop:6}}>1時間</Text>
          </View>
          <View style={{backgroundColor: 'white', flexDirection: 'row' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 12, height: 20, lineHeight: 20, marginLeft:20, marginTop:5}}>費用目安：</Text>
            <Text style={{ fontSize: 12, height: 20, lineHeight: 20, marginTop:6}}>¥500</Text>
          </View>
          <View style={{backgroundColor: 'white', flexDirection: 'row' }}>
            <Text style={{ fontSize: 12, height: 20, lineHeight: 20, marginTop:6, marginLeft:20}}>すのこで作れる簡単傘立て♪100円均一で材料が全て揃う...</Text>
          </View>
        </View>
      </ScrollView>
    )
  }

}
