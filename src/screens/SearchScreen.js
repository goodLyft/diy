import React, { Component } from 'react'
import { View, ScrollView, Image, StyleSheet, Text } from 'react-native'
import GridView from 'react-native-grid-view';
import AvView from '../AvView';

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
];

export default class SearchScreen extends Component {
  _renderItem(item) {
    return (
      <View key={item.key}>
        <Image
          source={{ uri: item.source }}
          style={{
            width: 125,
            height: 125,
            borderColor: 'white',
            borderWidth: 1,
          }}
          resizeMode={'contain'}
        />
      </View>
    );
  }

  render() {
    return (
      <ScrollView>
        <View style={{ height: 30, backgroundColor: 'white', flexDirection: 'row' }}>
          <Text style={{ fontWeight: 'bold', height: 20, lineHeight: 20, marginLeft:20, marginTop:5}}>人気のつくれぽ</Text>
        </View>
        <View style={{ height: 60, backgroundColor: 'white', flexDirection: 'row' }}>
          <Image
            style={{ width: 36, height: 36, margin: 12, borderRadius: 18, borderWidth: StyleSheet.hairlineWidth, borderColor: 'lightgray' }}
            source={{ uri: 'https://unsplash.it/100?image=669' }}
          />
          <Image
            style={{ width: 36, height: 36, margin: 12, borderRadius: 18, borderWidth: StyleSheet.hairlineWidth, borderColor: 'lightgray' }}
            source={{ uri: 'https://unsplash.it/100?image=996' }}
          />
          <Image
            style={{ width: 36, height: 36, margin: 12, borderRadius: 18, borderWidth: StyleSheet.hairlineWidth, borderColor: 'lightgray' }}
            source={{ uri: 'https://unsplash.it/100?image=1005' }}
          />
          <Image
            style={{ width: 36, height: 36, margin: 12, borderRadius: 18, borderWidth: StyleSheet.hairlineWidth, borderColor: 'lightgray' }}
            source={{ uri: 'https://unsplash.it/100?image=1027' }}
          />
          <Image
            style={{ width: 36, height: 36, margin: 12, borderRadius: 18, borderWidth: StyleSheet.hairlineWidth, borderColor: 'lightgray' }}
            source={{ uri: 'https://unsplash.it/100?image=823' }}
          />
          <Image
            style={{ width: 36, height: 36, margin: 12, borderRadius: 18, borderWidth: StyleSheet.hairlineWidth, borderColor: 'lightgray' }}
            source={{ uri: 'https://unsplash.it/100?image=550' }}
          />
        </View>
        <View style={{backgroundColor: 'white', flexDirection: 'row' }}>
          <GridView
            items={gridList}
            itemsPerRow={3}
            renderItem={this._renderItem}
          />
        </View>
      </ScrollView>
    )
  }
}
