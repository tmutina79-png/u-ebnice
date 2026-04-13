#!/bin/bash
cd '/Users/tomasmutina/Documents/NPI+workshop+nástěnka/AI/Učebnice'
git init
git add Funkce/
git commit -m 'Přidání materiálů k tématu Funkce'
git branch -M main
git remote add origin https://github.com/tmutina79-png/ucebnice.git
git push -u origin main
