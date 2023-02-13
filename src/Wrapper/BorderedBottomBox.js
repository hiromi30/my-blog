import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors'

const BorderedBottomBox = styled(Box)(() =>({
  borderBottom: `15px solid ${grey[50]}`
}))

export default BorderedBottomBox