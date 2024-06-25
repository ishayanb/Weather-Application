import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox({ info }) {
    const NORM_URL =
    "https://raw.githubusercontent.com/qknow/images/gh-pages/primary/primary-2-science/weather%20conditions/sunny-weather.jpg";
    const HOT_URL =
    "https://media.istockphoto.com/id/1323823418/photo/low-angle-view-thermometer-on-blue-sky-with-sun-shining.jpg?s=612x612&w=0&k=20&c=LwLCGF902C-DNwKgCMCR12zFnB4g1INWzlk1JPOidRk=";
    const COLD_URL =
    "https://media.istockphoto.com/id/637409946/photo/thermometer-on-snow-shows-low-temperatures-under-zero.jpg?s=612x612&w=0&k=20&c=fmRJtO3RRIMA6TV3JI93CSlteBTrQI1PAjmWaRLiBlA=";
    const RAIN_URL =
    "https://media.istockphoto.com/id/1476190237/photo/summer-rain-raindrops-bad-weather-depression.webp?b=1&s=170667a&w=0&k=20&c=S267VOEqTSAmd_ekDQ4OFy5IvHMNJydFvwG7FBPdxEI=";

    return(
        <div className="InfoBox">
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia 
      sx={{ height: 140 }} 
      image={info.humidity > 80 ? RAIN_URL : info.temp < 20 ? COLD_URL : info.temp > 30 ? HOT_URL : NORM_URL} 
      title="green iguana"/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
                <p>Temperature = {info.temp}&deg;C</p>
                <p>Humidity = {info.humidity}</p>
                <p>Minimum Temperature = {info.tempMin}&deg;C</p>
                <p>Maximum Temperature = {info.tempMax}&deg;C</p>
                <p>The weather can be described as <i>{info.weather}</i> and feels like{info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
    );
}