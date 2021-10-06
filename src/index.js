import app from "./app";
import config from "config"

app.listen(config.get('server.port'), () => {
    console.log(`Server started on port: ${config.get('server.port')}`);
});