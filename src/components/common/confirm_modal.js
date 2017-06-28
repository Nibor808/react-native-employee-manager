import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from './card_section';
import { Button } from './button';

const ConfirmModal = ({ text, onAccept, onDecline, visible }) => {
  /*
    On Android you must provide the onRequestClose prop to the modal
    even if it is an empty function
  */
  const { containerStyle, cardSectionStyle, textStyle } = styles;
  return (
    <Modal
      animationType={'slide'}
      onRequestClose={() => {}}
      transparent
      visible={visible} // bool
    >
      <View style={containerStyle}>
        <CardSection style={cardSectionStyle}>
          <Text style={textStyle}>{text}</Text>
        </CardSection>

        <CardSection>
          <Button title='Yes' onPress={onAccept} />
          <Button title='No' onPress={onDecline} />
        </CardSection>
      </View>
    </Modal>
  )
}

const styles = {
  containerStyle: {
    backgroundColor: 'rgba(0,0,0,0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  },
  cardSectionStyle: {
    justifyContent: 'center'
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  }
}

export { ConfirmModal };
