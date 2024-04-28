

const getSubscriptions = () => {
  axios.get('https://youtube.googleapis.com/youtube/v3/subscriptions?part=contentDetails&channelId=UCIJG2skTIeZzd7Cb3YZ7JiA&key=AIzaSyAMGSKwDt3p0TTv4_3cUtpEKuJtS5Ua-uU').then((res) => res.json())
  .then((data) => data.items.forEach((curr) => console.log(curr)))
}
