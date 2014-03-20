MrMine
======

Some cheats for the MrMine game v.0.40


Liability
=========

Don't run the thing if you don't know what you are doing. PERIOD. This code shouldn't mess you up, but don't risk that kind of stuff. All code in this git is provided "AS IS". I will accept bug reports, but do not contact me if you expect me to fix your property.

Copyright
=========

I own no rights or privileges to the MrMine code, brand, website, server, etc. Everything can be done in the web browser's console without my interference. Issues with MrMine should be brought to the attention of the developer and not to me.

How to Use
==========

  ***
    -In javascript case matters!!!  If a variable is in CAPS, it must stay in caps.
  ***
  -Open scripts.js in a text editor
  -Copy entirety of code
  -In your web browser of choice, navigate to MrMine.com
  --load your game or start a new one
  -Open the console, in Chrome you press F12
  --Google your browser if you don't know how to open it
  -Paste the entirety of the code and press enter
  
  Fuctions
  --------
  
    -sellall
      this sells all of the minerals you have collected
      this does NOT sell any isotopes
      to run type'
      
      sellall()
      
      'and press enter.
      
    -findchests
      Depending on the speed of your computer and the size of your mine, this could take a while.
    
      This will iterate through every possible mine level, and every miner reqardless of their existence.
      If a chest is found, it will be opened.  You will likely not see what was earned.
      to run type'
      
      findchests()
      
      'and press enter.
      
  Suggestions
  -----------
  
    MrMine does allow for the 'setInterval()' command.  This is particularly useful to gather chests in larger mines.
    
    >var spamchests = setInterval(
      function()
      {
        findchests();
      },
      1000            //this varible is the number of milliseconds.
      );
      
    >
    
    Chests disappear after 10 minutes, so you should set the milliseconds no more than 1000*60*10.
    Findchests is not optimized, so you should allow for some time to pass before running it again. 1000*60*2 sug.min.
    
    It also allows you to sleep without fear of your miners stopping work.
    
    >var sleepsell = setInterval(
      function()
      {
        sellall();
      },
      1000            //tis variable is the number of milliseconds.
      );
    
    >
    
    The timing of this interval is dependant on the number of miners you have and how big your cargo space is.
    I recommend keeping this interval low, but not continuous.  Suggested range "1000" - "1000*60*50"
    
    To clear the intervals (for instance, to collect materials to upgrade your drill) type'
    
    clearInterval(spamchests);clearInterval(sleepsell);
    
    'to remove both intervals.
