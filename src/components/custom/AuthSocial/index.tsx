import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TouchableOpacityProps, Platform } from 'react-native';
import { HStack, Spacer, VStack } from 'react-native-stacks';
import GoogleButton from './__SVG__/GoogleButton';
import { isTablet } from 'src/functions';
import { fonts, palette } from 'src/config';
import FacebookButton from './__SVG__/FacebookButton';
import { AppleButton } from '@invertase/react-native-apple-authentication';


interface SocialButtonProps extends TouchableOpacityProps {
  type?: 'google' | 'facebook' | 'apple';
}

const SocialButton = ({ type = 'google', ...props }: SocialButtonProps) => {
  let width = isTablet() ? 143 : 75;
  let height = isTablet() ? 57 : 30;

  return (
    <TouchableOpacity {...props}>
      {type === 'google' ? <GoogleButton width={width} height={height} /> : <FacebookButton width={width} height={height} />}
    </TouchableOpacity>
  );
};

const DIVIDER_TEXT_FONT = isTablet() ? 18 : 12;
const SPACING = isTablet() ? 16 : 8;

console.log("Platform",Platform.OS);

const AuthSocial = ({
  dividerText,
  onPressGoogle,
  onPressFacebook,
  onPressApple
}: {
  dividerText: string;
  onPressGoogle: () => void;
  onPressFacebook: () => void;
  onPressApple: () => void;
}) => {
  return (
    <VStack style={styles.authFooterContainer} spacing={SPACING}>
      <HStack style={styles.dividerTextContainer}>
        <View style={styles.dividerStyle} />
        <Spacer />
        <Text style={styles.dividerText}>{dividerText}</Text>
        <Spacer />
        <View style={styles.dividerStyle} />
      </HStack>
      <HStack spacing={10}>
        <Spacer />
        <SocialButton onPress={onPressGoogle} />
        <SocialButton type="facebook" onPress={onPressFacebook} />
        {Platform.OS === "ios" ?
          <AppleButton
            buttonStyle={AppleButton.Style.WHITE}
            buttonType={AppleButton.Type.SIGN_IN}
            style={{
              width: isTablet() ? 183 : 110,
              height: isTablet() ? 57 : 30
            }}
            onPress={() => onPressApple()}
          /> : null
        }
        <Spacer />
      </HStack>
    </VStack>
  );
};

const styles = StyleSheet.create({
  authFooterContainer: {
    alignSelf: 'center',
    width: '100%',
  },
  dividerTextContainer: {
    width: isTablet() ? 440 : 230,
  },
  dividerText: {
    fontFamily: fonts.light,
    color: palette.primary,
    fontSize: DIVIDER_TEXT_FONT,
  },
  dividerStyle: {
    width: '28%',
    height: 3,
    backgroundColor: palette.primary,
  },
});

export default AuthSocial;
