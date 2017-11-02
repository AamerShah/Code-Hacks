<body onload="setTimeout(Aamer, 0);" oncontextmenu="return false" onkeydown="return false" bgcolor="black">

<script>
  function Aamer()
    {
    if(screen.width > screen.height)
      {var oW = screen.height;}
    else
      {var oW = screen.width;}

if(oW <= 480)
    top.window.location.href="mobile.php";
    else window.location="web-version.php";
    }
</script>

//declaring HTML tag body or equivalent and calling javaScript function to execute on event load.
//Additionally, device dimensions afre checked on first page and thus right-click and keydown is disabled.

//Line 6: checking whether width is greater (landscape mode of device) or height is more (portrait mode of device)
//Line 9: The variable oW (original width) after execution of this condition will store the actual device width (in portrait mode).
//Line 9: This value is lowest among 'screen.height' and 'screen.width'.
//Lone 11: checking if the original width (so far calculated) is less than 481 pixels.
//Line 12: Opening mibile page for device width of less than the mentioned condition.
//Line 12: Additionally, using frame busting url redirect to force redirect even if the code is executed within an iframe, provided the condition is met.
//Line 13: Opening Web-View for devices with width greater than mentioned condition.
