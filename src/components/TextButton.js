import React from 'react'
import { StyledText, StyledButton, CustomShadow} from '../theme/CommonStyles'


const TextButton = ({extraStylings, title, titleStyling, onPress, Icon, iconName, iconSize, iconColor, iconStyles,disabled, width}) => {
  return (
    <StyledButton style={{...extraStylings, ...CustomShadow}} width={width} disabled={ false ||disabled} activeOpacity={0.6} onPress={onPress}>
      <StyledText fontSize={'20px'} fontWeight={'600'} style={{color:'white', letterSpacing:1.2, ...titleStyling}}>
        {title}
        {Icon && <Icon name={iconName} size={iconSize} color={iconColor} style={{marginRight:9, marginLeft:4, ...iconStyles}} />} 
      </StyledText>
    </StyledButton>
  )
}

export default React.memo(TextButton)