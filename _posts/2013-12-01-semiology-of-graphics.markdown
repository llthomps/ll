---
layout: feature
title:  "Retinal Graphics"
subtitle:  "Visualizing Information from Semiology of Graphics"
date:   2013-12-01 12:00:00
categories: features ux
class: semiology

preview: Even when we don't intend to, we're heavily influencing the interpretation of information by the way we choose to show it.  Jacque Bertin covered a basic language to visualizing information in his 1967 tome Semiology of Graphics.  The examination of the core of the language - the retinal variables - is still relevant today...

previewImage: "/img/semiology/index-thumb.jpg"

heroImages:
 semiology:
   img: "/img/semiology/hero.jpg"
   alt: "Retinal Variables Chart"

---
We've all spoken this phrase - "The data should speak for itself."  And for good reason, it makes us sound like neutral people who are only interested in what the data says, instead of what we actually are - hungering fools, attempting to influence the interpretation of the data through tricks and the illusion of impartiality.  If you're the sucker who prepared the data, chances are you're the one in the back trying to get people to agree with this bland statement that can't be argued with.  What you should've done is attempt to make the data clearer ahead of time.

Because here's the reality - even when we don't intend to, we're heavily influencing the interpretation of the data by the way we choose to show it.  Visualized quantitative data becomes qualitative the moment a human views it and begins to parse and compare it. So, if we don't take steps to speak a visual language that a viewer understands, we inadvertently confuse or influence the interpretation, becoming the sucker referenced above.

One book that speaks to this language directly is Jacque Bertin's *[Semiology of Graphics : Diagrams, Networks, Maps](http://www.amazon.com/Semiology-Graphics-Diagrams-Networks-Maps/dp/1589482611)* - a seminal, 1967 tome outlying some core tenants of information visualization.  While many of the insights have been implemented into our daily lives, it still contains a fascinating and relevant discussion on information visualization.  To this point, Bertin's most basic point is that any visual information as depicted on a 2-dimensional plane (e.g. graphs, maps, networks) requires a uniform language to be understood.

At the core of the language are the **retinal** (visual) variables (e.g. size, color, lightness, etc.).  Variations in these variables allow the viewer to read and compare information, with some variables being better at showing particular types of comparisons.

<div class="content-element">
<table class="semiology" style='max-width: 550px;'>
	<thead>
	<tr>
		<th class="empty">&nbsp;</th>
		<th>Association <span>Perceived as being similar</span></th>
		<th>Selection <span>Perceived as being different</span></th>
		<th>Order <span>Perceived as being ordered</span></th>
		<th>Quantity <span>Perceived as being proportional</span></th>
	</tr>
	</thead>
	<tbody>
		<tr>
			<th>Size</th>
			<td class="no"><span class="icon-minus"></span></td>
			<td class="yes">Yes</td>
			<td class="yes">Yes</td>
			<td class="yes">Yes</td>
		</tr>

		<tr>
			<th>Value / Contrast</th>
			<td class="no"><span class="icon-minus"></span></td>
			<td class="yes">Yes</td>
			<td class="yes">Yes</td>
			<td class="no"><span class="icon-minus"></span></td>
		</tr>

		<tr>
			<th>Texture</th>
			<td class="yes">Yes</td>
			<td class="yes">Yes</td>
			<td class="yes">Yes</td>
			<td class="no"><span class="icon-minus"></span></td>
		</tr>

		<tr>
			<th>Color</th>
			<td class="yes">Yes</td>
			<td class="yes">Yes</td>
			<td class="no"><span class="icon-minus"></span></td>
			<td class="no"><span class="icon-minus"></span></td>
		</tr>

		<tr>
			<th>Orientation</th>
			<td class="yes">Yes</td>
			<td class="yes">Yes</td>
			<td class="no"><span class="icon-minus"></span></td>
			<td class="no"><span class="icon-minus"></span></td>
		</tr>

		<tr>
			<th>Shape</th>
			<td class="yes">Yes</td>
			<td class="no"><span class="icon-minus"></span></td>
			<td class="no"><span class="icon-minus"></span></td>
			<td class="no"><span class="icon-minus"></span></td>
		</tr>

		<tr>
			<td>&nbsp;</td>
			<td colspan="4" style='text-align:left;'>...and additionally</td>
		</tr>
		<tr>
			<th>Planar (x/y)</th>
			<td class="yes">Yes</td>
			<td class="yes">Yes</td>
			<td class="yes">Yes</td>
			<td class="yes">Yes</td>
		</tr>
	</tbody>

	<tfoot>
		<td>&nbsp;</td>
		<td colspan="5" class="caption">Fig 1. Reading levels for visual variables</td>
	</tfoot>

</table>
</div>

So, according to these recommendations, you would use color to show that elements (or sets of elements) are similar or different to each other, but you wouldn't use color to show that they're ordered or more or less than each other.  For those, you'd use a different visual variable like size or contrast.  The ultimate goal of proper use of the retinal variables is to **help users make better and quicker qualitative assessments of quantitative data**.  

### Example: Graphing Usability Findings
Let's take a classic UX example, the results of a usability study.  Our data will show the number and severity of usability problems for a piece of sample software across a set of [heuristics](http://www.nngroup.com/articles/ten-usability-heuristics/) (a 25¢ word for "best practices").  In this example, we've got three visual dimensions that we need to visualize - the heuristic (a category), the severity of the issue (a 1-4 scale with 4 being the most severe) and the count of the issues found.

Here's the raw data:

<div class="content-element">
<table class="semiology chart" style='max-width: 550px;'>
	<thead>
		<tr>
			<td>&nbsp;</td>
			<th><span>most severe</span>4</th>
			<th>3</th>
			<th>2</th>
			<th><span>least severe</span>1</th>
			<th>Total</th>
		</tr>
	</thead>
	<tbody>
		<tr><th>Aesthetic and minimalist design</th><td>3</td><td>4</td><td>8</td><td>3</td><td>18</td></tr>
		<tr><th>Consistency and standards</th><td>1</td><td>2</td><td>4</td><td>2</td><td>9</td></tr>
		<tr><th>Error Prevention</th><td>0</td><td>1</td><td>0</td><td>1</td><td>2</td></tr>
		<tr><th>Flexibility and efficiency of use</th><td>0</td><td>0</td><td>6</td><td>0</td><td>6</td></tr>
		<tr><th>Help and documentation</th><td>0</td><td>1</td><td>0</td><td>3</td><td>4</td></tr>
		<tr><th>Help recognize, diagnose and recover from errors</th><td>0</td><td>3</td><td>1</td><td>0</td><td>4</td></tr>
		<tr><th>Match between system and real world</th><td>2</td><td>3</td><td>2</td><td>1</td><td>8</td></tr>
		<tr><th>Recognition rather than recall</th><td>1</td><td>6</td><td>2</td><td>0</td><td>9</td></tr>
		<tr><th>User control and freedom</th><td>0</td><td>2</td><td>2</td><td>0</td><td>4</td></tr>
		<tr><th>Visibility of system status</th><td>0</td><td>4</td><td>3</td><td>1</td><td>8</td></tr>
	</tbody>
	<tfoot>
		<td>&nbsp;</td>
		<td colspan="5" class="caption">Fig 2. Number of usability issues, grouped by heuristic and severity for software X</td>
	</tfoot>
</table>
</div>

Of the dimensions, the __severity is ordered__ because the numbers should remain along the 1-4 scale, the __count is proportional__ to help us gauge the relative size of each count, and the __heuristic is selective__ to help us differentiate each category.

Here's the default output from graphing the data in a spreadsheet:

<div class="semiology aside">
	<img src="/img/semiology/color-graph.png" alt="Graph - Colored">
	<div class="caption content-element">Fig 3. Usability issues found by heuristic (alphabetical) and severity (color)</div>
</div>

This graph is fairly easy to read, but it does have a few improvements that can be made.

First, the default setting has generated a heat-map color scheme (blue-to-red) to indicate severity.  One could argue that this color scheme has a limited reading order, but still requires verification via the legend and experience with the metaphor to interpret the results.  Furthermore, it applies as much visual emphasis to the low severity results as it does to the high severity results.  The fix for this would be to use an ordered variable, like value, instead of color.

The second issue with the graph is that while it provides a quantitative assessment for each count and heuristic via the size and planar position, it's difficult to compare the data points.  The rules ordered alphabetically is not particularly useful.  Because the heuristics aren't naturally ordered, we can place them in any order we see fit to provide additional meaning.  Ordering by total count or by most severe issue count (what we'll demonstrate below) should do that.

Here's a version with the recommended fixes applied:

<div class="semiology aside">
	<img src="/img/semiology/bw-graph.png" alt="Graph - Black and White">
	<div class="caption content-element">Fig 4. Usability issues found by heuristic (most severe) and severity (black)</div>
</div>

...and another with texture, a different property which can demonstrate order.  In this one, we've also removed the numbering in the severity scale - demonstrating that these retinal variables can self-order based on the visual information alone.

<div class="semiology aside">
	<img src="/img/semiology/texture-graph.png" alt="Graph - Texture">
	<div class="caption content-element">Fig 5. Usability issues found by heuristic and severity (texture)</div>
</div>

Using value or texture, we can demonstrate both severity and quantity in a way that allows the user to naturally read the data without periodically referring to the legend.  The natural ordering exposes a few traits to the dataset.  First, the primary visual weight exists in the areas with the most contrast or darkest pattern - highlighting the top 4 categories with the most severe issues.  Second, the lower contrast / pattern also suggests that the "flexibility and efficiency of use" isn't an area of great concern due to the lack major issues, despite an average level quantity of issues.

Of additional value is that the graph becomes more scalable with value over color.  The numerical values of the severities become less relevant, as we now have a scale that allows for built-in ordering of data.

Lastly, and with the overall point made, *people strongly prefer colors*, so even though the second and third graph are more readable, some people would probably tell you that they prefer the first graph.  Since value is a property of any color, including black, we can easily add a color and preserve the value properties and their preattentive benefits in the graph.

<div class="semiology aside">
	<img src="/img/semiology/brown-graph.png" alt="Graph - Brown + Contrast">
	<div class="caption content-element">Fig 6. Usability issues found by heuristic and severity (brown)</div>
</div>

If you're interested in reading more, you can pick up a copy of [Semiology of Graphics: Diagrams, Networks, Maps](http://www.amazon.com/Semiology-Graphics-Diagrams-Networks-Maps/dp/1589482611) (amazon.com) by Jacque Bertin.