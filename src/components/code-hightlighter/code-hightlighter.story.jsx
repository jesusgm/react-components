import React from "react";
import CodeHghtr from "./index";

export default { title: "Code Hightlighter" };

const javascriptcontent = `
  let three = 1 + 2; // This is a comment
  /*
    this is a multiline content
  */

  export const javascript = () => (
    <div>
      <h2>Code Hightlighter javascript</h2>
      <CodeHghtr lang="javascript">
        {javascriptcontent}
      </CodeHghtr>
    </div>
  );

`;

export const javascript = () => (
  <div>
    <h2>Code Hightlighter javascript</h2>
    <CodeHghtr lang="javascript">{javascriptcontent}</CodeHghtr>
  </div>
);

const bashcontent = `
  #!/bin/bash

  ###### CONFIG
  ACCEPTED_HOSTS="/root/.hag_accepted.conf"
  BE_VERBOSE=false

  if [ "$UID" -ne 0 ]
  then
  echo "Superuser rights required"
  exit 2
  fi
`;

export const Bash = () => (
  <div>
    <h2>Code Hightlighter bash</h2>
    <CodeHghtr lang="bash">{bashcontent}</CodeHghtr>
  </div>
);

const sqlcontent = ` 
  CREATE TABLE "topic" ( 
    "id" serial NOT NULL PRIMARY KEY, 
    "forum_id" integer NOT NULL, 
    "subject" varchar(255) NOT NULL 
  ); 
    
  ALTER TABLE "topic"
  ADD CONSTRAINT forum_id FOREIGN KEY ("forum_id") 
  REFERENCES "forum" ("id"); -- 

  Initials insert into "topic" ("forum_id", "subject") values (2,'D''artagnian'); 
`;

export const sql = () => (
  <div>
    <h2>SQL</h2>
    <CodeHghtr lang="sql">{sqlcontent}</CodeHghtr>
  </div>
);
