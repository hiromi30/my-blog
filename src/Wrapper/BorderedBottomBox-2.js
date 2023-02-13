import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors'

const BorderedBottomBox2 = styled(Box)(() =>({
  borderBottom: `10px solid ${grey[500]}`
}))

export default BorderedBottomBox2