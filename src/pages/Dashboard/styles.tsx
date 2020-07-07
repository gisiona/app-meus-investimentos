import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
    background: #f0f0f5;
    flex: 1;
`;

export const Header = styled.View`
    height: 60px;
    padding: 0 16px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: #f0f0f5;
`;

export const BalanceContainer = styled.View`

`;

export const BalanceTitle = styled.Text`
    color: rgba(255,255,255,0.8);
    font-size: 15px;
    text-align: center;
`;

export const Balance = styled.Text`
    color: #000;
    font-size: 16px;
    text-align: center;
    font-weight: bold;
`;

export const ContainerScrollView = styled.ScrollView`

`;