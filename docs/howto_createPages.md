Inside your app folder

create a new folder after the url you are looking for
example: homepage/

inside said folder create a js file called page.js

insert inital code which is this:



export default function *changeThisToTheNameOfTHeFolder*() {
  return (
    <div>
      <h1>Homepage</h1>
    </div>
  );
}

things to know:
- between the divs goes your code



then run "npm run dev" in your terminal

then visit /*nameOfFolder*
