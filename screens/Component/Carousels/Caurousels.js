import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Color from '../../../Config/color';
export default class App extends React.Component {
  static navigationOptions = {
    title: 'Welcome to the app!'
  };
  state = {
    stop: false,
    activeSlide: this.props.activeSlider,
    entries: [
      { title: '', backgroundColor: '#F8F8F8' },
      { title: 'Calm down', backgroundColor: '#DE6B48' },
      { title: 'Mindfulness', backgroundColor: '#E5B181' },
      { title: '2 minutes count down', backgroundColor: '#F3DE8A' },
      { title: 'Calm down', backgroundColor: '#AAD493' },
      { title: 'Calm down', backgroundColor: '#7DBBC3' },
      { title: '', backgroundColor: '#F8F8F8', id: 'space' },
      { title: 'Right one', backgroundColor: '#7DBBC3' },
      { title: 'Right two', backgroundColor: '#AAD493' }
    ],
    status: false
  };
  componentDidMount() {
    setTimeout(() => this.setState({ status: true }), 3000);
  }

  _renderItem = ({ item, index }) => {
    if (item.id) return;
    return (
      <TouchableOpacity onPress={() => console.log('clicked')}>
        <View
          key={index}
          style={{
            ...carouselStyle.slider,
            backgroundColor: item.backgroundColor,
            width: 140
          }}
        >
          <Text style={carouselStyle.fontGallery}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  componentDidUpdate() {
    let { status } = this.state;
    if (!status) this.setState({ status: true });
  }

  show = index => {
    console.log(index);
    this.props.hideMic('Initial');
  };

  changeItem = index => {
    if (!this.state.status) this.setState({ status: true });
  };

  startScroll = () => {
    if (this.state.status) this.props.hideMic('scrolling');
  };

  render() {
    let { entries, activeSlide } = this.state;
    if (this.props.show === 'scrolling' && entries[6].id) {
      entries.splice(6, 1);
      // activeSlide = activeSlide - 1;
    }
    return (
      <View
        style={{
          marginLeft: -95,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Carousel
          activeSlideAlignment='start'
          data={entries}
          renderItem={this._renderItem}
          onSnapToItem={this.changeItem}
          sliderWidth={455}
          itemWidth={200}
          firstItem={activeSlide}
          inactiveSlideScale={1}
          onScroll={this.startScroll}
          inactiveSlideOpacity={1}
        />
      </View>
    );
  }
}

const carouselStyle = StyleSheet.create({
  slider: {
    backgroundColor: 'red',
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },

  fontGallery: {
    fontSize: 20,
    flexWrap: 'wrap',
    textAlign: 'center',
    color: Color.black
  }
});
