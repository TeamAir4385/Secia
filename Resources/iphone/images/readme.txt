I manually edited these imaged with GIMP
Originally colored black with a clear background.
I had to copy the images sicne something was keeping me from doing a simple paintfill.
The icon pack I borrowed from is open source so we shouldn't have to worry about that.
These are inteded to be placeholder button icons until we have our own made up.

I will push the full pack up to github just in case. It does havea lot of "material" 
	to use for examples.

For when we do have our own icons for the main page of the app, it should be as simple 
	as renaming the new image s to what the old ones are and merging them into 
	/app/assets/images/

When specifiying an image to use for Ti.Alloy, I spent way too long figuring out you need 
	a preceeding "/" otherwise the app won't know htat it is a filepath. I should have 
	known better since / signifies the root directory in most modern file systems.
	
So when adding mroe iamges, we can add them to the javascript code or the TSS code pretty 
	much the same way. Alloy implies that we should add it to the stylesheet whereas 
	traditional Titanium documentation adds it to the controlelr when we make an object.

Good old fashioned Titanium code:

	var button = Titanium.UI.createButton({
	    backgroundImage:'/images/button.png',
	    width:100,
	    height:50,
	    title:'',
	    right:15,
	    top:150
	});
	
then we would call it as a function and so on...

Alloy does things easier/lazier.

We call the button directly from the XML using $.button.addEventListner

from that we can style said button similar to how it is done in CSS

	"#button" : {
		backgroundImage:'/images/button.png',
	    width:100,
	    height:50,
	    title:'',
	    right:15,
	    top:150
	}
	
Both code does the same thing but Alloy makes things more modular. It also makes the 
Javascript easier to look at in my opinion.

Again, it took me way too long to figure out how to use custom icons for buttons.
	
