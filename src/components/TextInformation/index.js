import { Text, View } from 'react-native';
import { styled } from 'nativewind';

const TextStyled = styled(Text);

export default function TextInformation({ title, onPress }){
    return (
            <TextStyled className="text-orange-500 font-bold"> {title} </TextStyled>
          
        
    )
}