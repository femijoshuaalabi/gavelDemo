import styled from 'rn-css';

export const colors = {
    backgroundColor: '#E5E5E5',
    defaultColor: '#FF0000',
    cardColor: '#fff',
    borderColor: '#BDBDBD',
    gray4: '#BDBDBD',
    gray3: '#828282',
    textColor: '#333333',
    textColor2: '#4f4f4f',
};

export const Text = styled.Text`
    line-height: 23px;
    font-family: Roboto-Regular;
    color: ${colors.textColor};
`;

export const TextBold = styled.Text`
    line-height: 23px;
    font-family: Roboto-Black;
    color: ${colors.textColor};
`;
