import { getmoviebysearch } from "./APIs/main";

async function handlerinput(event) {
    [event.target.name] = event.target.value;
    const x = event.which || event.keyCode;

    console.log("event show ", x);
    window.location.replace("/categories");
    await getmoviebysearch(this.state.movietitle).then(e => console.log(e.data));
}
