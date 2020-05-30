import tw from 'tailwind.macro';
import styled from '@emotion/styled';
import { colors } from '../../../CommonModule/components/common/themes/colors';

export const ProblemStatementView = styled.div `
     display:flex;
     flex-direction:column;
     width:1270px;
     height:1195px;
     background-color:${colors.white};
     padding-top:50px;
`,
    ProblemStatementMode = styled.div `
    display:flex;
`,
    CreateProblemStatement = styled.div `
    padding:40px;
    width: 710px;
    height: 670px;
    border: solid 1px ${colors.lightBlueGrey};
    background-color:${colors.white}
`,
    CreatePreviewProblemStatement = styled.div `
    width: 710px;
    height: 670px;
    border: solid 1px ${colors.lightBlueGrey};
    background-color: ${colors.lightBlueGrey};
`,
    SaveButtonField = styled.div `
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    align-items:flex-end;
    height:100px;
`,
    ReactWrap = styled.div `
	padding: 45px;
`,
    ErrorMessage = styled.div `
    ${tw` text-red-800 text-xs italic`}
`;