import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import Color from '../../../Config/color';
import mainStyle from '../../../Config/mainStyle';

const templateData = [
  {
    title: 'Watch: Equations',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT42KeJzQGhknhvj-M2eplUl_G9AJdvoW45UMBlvRQ1moFrurMp'
  },
  {
    title: 'Rate: Equations',
    image:
      'https://www.remove.bg/assets/start_remove-79a4598a05a77ca999df1dcb434160994b6fde2c3e9101984fb1be0f16d0a74e.png'
  },
  {
    title: 'Vote: Who should win?',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxbWDRp0uDnhvGkesRkA8DsHUomz2vNr07nD7AEE1_I29izRR6'
  },
  {
    title: 'Open: Site',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ4ehmeD0uAxN1B3hr7aBKH93pCMz7i48anPnXuvWqIJzEZGeYJ'
  },
  {
    title: 'See: What is 3 plus 3',
    description: ' What is 3 plus 3?',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT42KeJzQGhknhvj-M2eplUl_G9AJdvoW45UMBlvRQ1moFrurMp'
  },

  {
    title: 'See: What is 3 plus 3',
    description: ' What is 3 plus 3?'
  },
  {
    title: 'Pizza',
    description: `Welcome to the pizza palace skill. You can order a pizza just by asking Alexa. Welcome to the pizza palace skill. You can order a pizza just by asking Alexa. Welcome to the pizza palace skill. You can order a pizza just by asking Alexa. `,
    skill: 'Palace Palace',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT42KeJzQGhknhvj-M2eplUl_G9AJdvoW45UMBlvRQ1moFrurMp'
  }
];

export default class Card extends React.Component {
  state = {
    data: templateData[6],
    interval: null
  };

  checktype = () => {
    return this.state.data.title.split(':')[0];
  };

  showIcon = () => {
    let word = this.checktype();
    switch (word) {
      case 'Watch':
      case 'Open':
        return (
          <TouchableOpacity>
            <Image source={require('../../../assets/img/open.png')}></Image>
          </TouchableOpacity>
        );
        break;
    }
  };

  showFooter = () => {
    let word = this.checktype();
    switch (word) {
      case 'Watch':
        return (
          <View style={watchStyle.container}>
            <Button
              title='Play'
              buttonStyle={mainStyle.defaultButton}
              titleStyle={mainStyle.buttonTitle}
            />
          </View>
        );
      case 'Link':
        break;
      case 'Rate':
        return (
          <View style={RateStyle.container}>
            <Button
              icon={<Icon name='thumbs-up' type='font-awesome' color={'white'} />}
              title=''
              buttonStyle={RateStyle.thumbUp}
            />
            <Button
              icon={<Icon name='thumbs-down' type='font-awesome' color={'white'} />}
              title=''
              buttonStyle={RateStyle.thumbDown}
            />
          </View>
        );
        break;
      case 'Vote':
        return (
          <View style={VoteStyle.container}>
            {[1, 2, 3, 4].map((item, key) => (
              <Button
                key={key}
                title={item.toString()}
                onPress={() => console.log(item)}
                buttonStyle={(mainStyle.defaultButton, { width: 60 })}
                titleStyle={mainStyle.buttonTitle}
              />
            ))}
          </View>
        );
        break;
      case 'Open':
        return (
          <View style={watchStyle.container}>
            <Button
              title='Open'
              buttonStyle={mainStyle.defaultButton}
              titleStyle={mainStyle.buttonTitle}
            />
          </View>
        );
    }
  };

  render() {
    const { data } = this.state;
    let status = ['See', 'Watch', 'Link', 'Vote', 'Rate', 'Open'];
    let first_word = this.checktype();
    let other = status.indexOf(first_word);

    return (
      <View style={cardStyle.container}>
        {other === -1 && (
          <View style={{ marginBottom: 5, maringTop: '-20' }}>
            <Text style={{ ...mainStyle.defaultFontSize, ...mainStyle.whiteFont }}>
              {data.title}
            </Text>
            <Text style={{ fontSize: 14, ...mainStyle.whiteFont }}>{data.skill}</Text>
          </View>
        )}
        {first_word !== 'See' || data.image ? (
          <View style={cardStyle.imageContainer}>
            <Image
              source={{
                uri: data.image
              }}
              resizeMode='stretch'
              style={cardStyle.image}
            />
          </View>
        ) : (
          <View style={SeeStyle.container}>
            <Text style={{ ...mainStyle.whiteFont, fontSize: 30 }}>{data.description}</Text>
          </View>
        )}
        {other === -1 && (
          <View style={{ marginTop: '5%' }}>
            <Text style={{ ...mainStyle.whiteFont, fontSize: 14 }} textAlign='auto'>
              {data.description}
            </Text>
          </View>
        )}
        {other !== -1 && first_word === 'See' && data.image && (
          <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: '5%' }}>
            <Text style={{ color: 'white', fontSize: 20 }}>{data.description}</Text>
          </View>
        )}
        {other !== -1 && first_word != 'See' && (
          <View style={cardStyle.footer}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ ...mainStyle.whiteFont, ...mainStyle.defaultFontSize, flex: 1 }}>
                {data.title}
              </Text>
              {this.showIcon()}
            </View>
            {this.showFooter()}
          </View>
        )}
      </View>
    );
  }
}

const cardStyle = StyleSheet.create({
  container: {
    paddingTop: 12,
    paddingLeft: 27.5,
    paddingRight: 27.5,
    width: '100%',
    height: '100%'
  },
  imageContainer: {
    height: '55%',
    backgroundColor: 'white'
  },
  image: {
    height: '100%',
    width: '100%',
    borderColor: 'white',
    borderWidth: 1
  },
  footer: {
    marginTop: '10%'
  }
});

const watchStyle = StyleSheet.create({
  container: {
    marginTop: '10%'
  }
});

const RateStyle = StyleSheet.create({
  container: {
    ...watchStyle.container,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  thumbUp: {
    backgroundColor: '#00C851',
    width: '91%'
  },
  thumbDown: {
    ...mainStyle.pinkButton,
    width: '91%'
  }
});

const VoteStyle = StyleSheet.create({
  container: {
    ...watchStyle.container,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

const SeeStyle = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '70%'
  }
});
