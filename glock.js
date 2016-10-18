/**
 * @author Kircher, Everett (Everettkircher@icloud.com)
 * @version 0.0.1
 * @summary hello world // Created 09.15.16
 * @todo
 */

"use strict";
const PROMPT = require('readline-sync');

function main() {
    setCurrentTime();

}
main();

function setCurrentTime() {
    for(let hour = 0; hour < 24; hour++)
        if (hour = (hour < 10 ? "0" : "" ) + hour){
        for(let minute = 0; minute < 60; minute++)
            if (minute = (minute < 10 ? "0" : "" ) + minute){
            for(let second = 0; second < 60; second++){
                if (second = (second < 10 ? "0" : "" ) + second)
                    console.log(`\n${hour}:${minute}:${second}`);

            }
       }


    }
}