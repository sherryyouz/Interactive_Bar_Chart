# Interactive Bar Chart

In this assignment, I gathered the data of the labor force of women (% of total) in 2016 of 10 developed countries. I created an interactive bar chart. The project includes 4 files: a8.html, a8bar.js, style.css and the data file (LaborWomen.json). This chart allows you to manipulate the data by sorting and filtering. I hope you like it.
All the data I used in this assignment were download from [worldbank.org](https://data.worldbank.org/?locations=AU-CA-FR-DE-IT-JP-KR-ES-GB-US)

## Link to the assignment
I have published this assignment to usc scf server. In order to view this assignment, use this link: [http://www-scf.usc.edu/~zhangyou/a8.html](http://www-scf.usc.edu/~zhangyou/a8.html).


## USC SCF Publishing Steps

All USC students are eligible for UNIX Computing Accounts for Students (SCF) accounts. Students that need to access USC UNIX resources may do so using their Student Computing Facility (SCF) accounts. Located at `aludra.usc.edu` and `nunki.usc.edu`, these two servers act as time-sharing hosts for all student accounts. See the [SCF](https://itservices.usc.edu/scf/) page for more details.

I published my work using [Filezilla](https://filezilla-project.org) by connected with USC [SFTP](https://itservices.usc.edu/sftp) (secure FTP), and I have put the files in the public_html.

__Example To Make the Link Public__

```
$ ssh <username>@aludra.usc.edu  # <username> is your USC username as it appears in your USC email address
$ mkdir public_html  # automatically mapped by Apache to http://www-scf.usc.edu/~username
# you will get an error in previous step if that directory already exists
$ cd public_html  # navigate inside public_html directory
$ cat > a6.html  # paste what follows into a6.html; when done pasting, type Ctrl+D to send EOF to close the file
<html>
   <head>
       <title>HTML Page Template</title>
   </head>
   <body>
       Hello!
   </body>
</html>
$ cat > <filename>  # repeat previous step for other files
$ cd ..  # navigate outside public_html directory
$ chmod -R 755 public_html  # make readable by www user for Apache to access 
```

Then you should be able to see the page by going to: `http://www-scf.usc.edu/~<username>/a6.html`

## Local View Prerequisites
To run the code locally, you need to have npm and browsersync on your device.
Install 'npm', 'node.js' and use 'browsersync' to run the code.
Here are some instructions:
- [npm tutorial](https://docs.npmjs.com/cli/install)
- [node.js download](https://nodejs.org/en/download/)
- [browsersync tutorial](https://www.browsersync.io/)

## Usage

With 'npm' installed, run

    $ npm install browser-sync -g
to install Browsersync.

And from the root of your project directory run the following command
    
    browser-sync start --server --files "*.html, css/*.css"
    
This will allow BrowserSync to watch all HTML and CSS files in the current directory. Once you run the command, a browser window will open in the default browser serving the directories root file, in this case 'a5.html'. In the console of the running BrowserSync start command, you should see the result in your terminal (as shown in the screenshot).

- **Local**: represents the address on your local machine with which you can view the project.
- **External**: represents the address that any user on you network can view the project.

Then simply copy the address to your browser, and you will be able to see the page!
