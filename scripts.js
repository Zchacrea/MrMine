//To be used with the MrMine Webgame under the console.  Copy source in full then check readme for how to use.

var sellall = function()
{
  document.getElementById('UPALLB').onclick() //brings us to top;
  document.getElementById('PLACE1').onclick() //opens sell center;
  x=2;
  while (x<18)
  {
      document.getElementById('SB'+x).onclick();
      x++;
  }
  document.getElementById('CLOSEs').onclick() //closes sell center;
}

var findchests = function()
{
  document.getElementById('UPALLB').onclick()         //brings us to top;
  letters = ['a','b','c','d','e','f','g','h','i','j'] //array to cycle through miners
  i=0;
  while (i<505)                                       //current Maximum Depth
  {
    docuemnt.getElementById('DOWNB').onclick()        //takes us down one level
    letters.forEach(
      function(e)
        {
          document.getElementById('L5'+e).onclick()   //clicks chest if over a miner
          document.getElementById('OPENTIT').onclick()//opens chest
          document.getElementById('OPENTIT').onclick()//closes chest
        }
      )
    i++;
  }
}

