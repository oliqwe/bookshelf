import { makeStyles } from '@material-ui/core/styles'

const useBookCardStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    width: '100%',
    position: 'relative',
    '& .hidden-button': {
      display: 'none',
    },
    '&:hover .hidden-button': {
      display: 'flex',
    },
  },
  cardAction: {
    height: '100%',
  },
  imageContainer: {
    marginBottom: theme.spacing(1),
  },
  image: {
    display: 'block',
    margin: '0 auto',
  },
  removeIcon: {
    cursor: 'pointer',
    position: 'absolute',
    width: '40px',
    height: '40px',
    borderRadius: '4px',
    right: '-2px',
    top: '-2px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #eee',
  },
}))

export default useBookCardStyles
