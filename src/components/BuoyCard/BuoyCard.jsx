import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

export default function BuoyCard() {
    const classes = useStyles();

    return (
       <Link to="/favorites"> 
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="BuoyImage"
                    height="140"
                    image="/static/images/buoy.jpg"
                    title="BuoyImage"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Buoy Name and Station Number
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        GPS Coordinates
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Link to='/favorites'>
                <Button size="small" color="secondary">
                    Add to Favorites
                </Button>
                </Link>                
            </CardActions>
        </Card>
        </Link>
    );
}