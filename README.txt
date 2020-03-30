1. Verander je wachtwoord. Je ziet de letters niet maar ze worden wel geregistreerd.

passwd

2. Kijk wat er in de huidige directory staat (ls = list)

ls

3.  Verander je working directory (cd = change directory). 
Let op: alles in die map komt online te staan.

cd public_html

4. Bewerk je eigen homepage: index.html
We hebben nu maar twee editors, nano of vim.
Om verwarring te voorkomen, begin met nano.

nano index.html

5. Na het bewerken, ga terug naar je "home" in /home/username

cd ~

N.B. "~" is een afkorting voor "home"

6. Bezoek je website in je normale browser met ip/~username!

Bijv: https://34.73.188.158/~edwin

7. Kijk wie online is

who

8. Schrijf een berichtje aan iemand die online is (vgl. output van who)

write edwin pts/0

9. Vergeet mij niet te vingeren

finger edwin

10. Ga naar je home directory and laat anderen weten waar je mee bezig bent door een .plan bestand te maken. 
Bestanden met een "." ervoor zijn verborgen.
je kan ze alleen zien met ls -a

cd ~
nano .plan

11. Maak een coole website en vraag anderen om tips!
