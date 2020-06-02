import tw from 'tailwind.macro'
import styled from '@emotion/styled'
import { colors } from '../../../CommonModule/components/common/themes/colors'

export const TopBar = styled.div `
      ${tw`flex justify-between`}
      border-bottom: 1px solid lightgrey;
      width:1270px;
      height:72px;
      background-color: ${colors.white};
`,
   SignOutbutton = styled.img `
      ${tw`border-gray-800 m-2 h-12 w-12 p-1 rounded text-xs`}
      border-radius:50%;
`,
   Notification = styled.img `
   width: 30px;
   height: 30px;
   background-color: var(--dark-blue-grey);
`,
   HeaderNotify = styled.div `
   display:flex;
   width:120px;
   justify-content:space-between;
   align-items:center;
`;
