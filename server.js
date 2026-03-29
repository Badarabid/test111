app.get('/', (req, res) => {
  res.send(`
    <div style="text-align:center; margin-top:50px; font-family:sans-serif;">
      <h1 style="color: #4CAF50;">Mubarak Ho! CI/CD Kaam Kar Raha Hai!</h1>
      <p style="font-size: 20px;">Ye update GitHub Actions ke zariye <b>Automatically</b> deploy hui hai.</p>
      <p>Current Time: ${new Date().toLocaleTimeString()}</p>
    </div>
  `);
});