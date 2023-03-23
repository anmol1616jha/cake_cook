import { StatusBar, StyleSheet} from 'react-native'
import styled from 'styled-components'
import {COLORS, SIZES, FONTS} from '../theme'

const Border = styled.View`
    border: 0.5px solid gray;
    border-radius: 6px;
    padding: 5px;
`

const BorderedRounedButton = styled.TouchableOpacity`
    border-radius:5px;
    background-color: ${COLORS.green20};
    margin:10px;
`

const ColCenter = styled.View`  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Container = styled.SafeAreaView`
    flex:1;
    margin-top: ${StatusBar.currentHeight}px;
    padding:0px 10px 10px 10px;
`
const CustomShadow = {
    shadowColor: COLORS.gray90,
    shadowOffset: {
      width: 8,
      height: 0
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5
}

const ExtraSpace = styled.View`
    padding: ${props => props.space ? props.space : '10px'};
`
const HorizontalLine = styled.View`
    border: 0.4px solid black;
    margin:10px 10px 0px 10px;
    width: 100%;
`

const Row = styled.View`
    display: flex;
    flex-direction: row;
    padding:8px 1px 3px 1px;
    justify-content:space-between;
    align-items:center;
    flex-wrap: wrap;
`
const StyledButton = styled.TouchableOpacity`
    background-color: ${COLORS.gray80};
    padding: 13px 10px;
    border-radius: 8px;
    width: ${props => props.width ? props.width : '100%'};
    justify-content: center;
    align-items: center;
    margin-top:10px;
`
const StyledInput = styled.TextInput`
    padding: 10px 10px 10px 20px;
    border-radius: ${props => props.borderRadius ? props.borderRadius : '8px'};
    margin:10px 0px;
    border-color: ${props => props.borderColor ? props.borderColor : COLORS.gray10};
    border: ${props => props.border ? props.border : '0.5px solid'};
    width: ${props => props.width ? props.width : '100%' };
    font-size: ${props => props.fontSize ? props.fontSize :  `${SIZES.font}px`};
    font-family: ${FONTS.Regular};
    color:${COLORS.gray80};
`
const StyledText = styled.Text`
    color:${props => props.color ? props.color : COLORS.black};
    font-size: ${props => props.fontSize ? props.fontSize : `${SIZES.font}px`};
    font-family: ${props => props.fonts ? props.fonts : FONTS.Regular};
    font-weight: ${props => props.fontWeight ? props.fontWeight : SIZES.regular};
`

const ValidationText = styled.Text`
    color:${props => props.color ? props.color : COLORS.red};
    font-size: ${props => props.fontSize ? props.fontSize : `13px`};
    font-family: ${props => props.fonts ? props.fonts : FONTS.Regular};
    font-weight: ${props => props.fontWeight ? props.fontWeight : SIZES.regular};
    align-self:flex-start;
    margin-left:10px;
`

const Asterisks  = styled.Text`
    color:red;
    font-size: 16px;
    font-weight: bold;
`

const commonStyles = StyleSheet.create({
    buttonTextStyles:{fontWeight:'400', letterSpacing:0.8, textTransform:'capitalize', fontSize:17},
    buttonExtraStyles:{ height:50, paddingTop:0, paddingBottom:0, backgroundColor:COLORS.red},
    commonMarketingButton:{width:'48%', paddingTop:0, paddingBottom:0, height:50, alignItems:'center', backgroundColor:COLORS.red},
    container:{flex:1, marginTop:10},
    flex:{flex:1, marginTop:StatusBar.currentHeight},
    flexWithPadding:{flex:1, padding:10}
})

export {
    Border,
    BorderedRounedButton,
    ColCenter, 
    Container, 
    CustomShadow,
    ExtraSpace,
    HorizontalLine,
    Row,
    StyledText,
    ValidationText,
    StyledInput,
    StyledButton,
    commonStyles,
    Asterisks
}