# Window

Website for a window installation company

## Raw data

* Bare HTML layout without interactivity
* Styles written in the LESS preprocessor and converted to plain CSS
* All necessary images and fonts (already connected)

## Technical Requirements

* JavaScript code must be native, without the use of libraries, frameworks or plugins (e.g. JQuery)
* Console should not show any errors
* Names of all variables/classes must not contain Cyrillic or transliteration. No "peremennaya"
* The final version should be built on any modular structure. In the future we plan to expand
* Works in all modern browsers (Chrome, Firefox, Opera, IE11, Edge, Safari)
* Animations are very welcome, but are also left to your own discretion (you can change the installed classes from animate.css as you like)
* Using ES6+
* You have the right to modify the project as you need to achieve your goal - add the necessary id's, classes, styles, animations, include additional styles (e.g. animate.css)
* No code duplication. No need to bind separate actions to each button. Use a function or loops.

## Task list
**This project already has a connected slider in the form of a ready-made solution. That's all we were able to do. You do not need to touch it. It was left to keep the styles of the original project and support the mobile version. That is where it works.**

<details>
<summary>Modal window "Call the measurer"</summary>

Open a modal window with a contact form when you click on certain buttons/links. Also open this modal window when the user is on the site for more than 60 seconds.

</details>

<details>
<summary>Forms</summary>

All forms on the site should be sent via ajax (without reloading the page) and record all entered data. It is also necessary to notify the user of the sending status (sent, sent, error). In the field with the phone you can only enter numbers.

</details>

<details>
<summary>Tabs</summary>

Tabs for different types of glazing must be implemented. The active tab and its style are switched. (class active). The user can click on both the caption and the image.

</details>

<details>
<summary>Modal window "Calculate Cost"</summary>

There are "Calculate Cost" buttons inside all the tabs. When you click on them, a modal window with the "popup_calc" class should appear. 

The main task: 
1. When you click on the small previews (4 in a row above), the preview becomes somewhat larger. Below them, the analog image of the active preview is shown. If you select a different one, there will be a similar logic. In the layout, everything is ready - you only need to prescribe the logic. 

In the "width" and "height" fields, you can only enter numbers.

When you click on "Next" this modal window is hidden. 

2. "popup_calc_profile" appears.
On this window to realize that you can choose only 1 profile. Either cold or warm.

When you click on the "Next" button, this modal window is hidden. 

3. "popup_calc_end" appears. 
The requirements here are exactly the same as in the other forms. BUT! All the data that a person has marked or selected must be transmitted with the form.

</details>

<details>
<summary>Timer</summary>

A timer must be implemented in a special section. Set any deadline for now

</details>

<details>
<summary>Portfolio section</summary>

When you click on any of the eight pictures - it opens to full screen with a translucent, dark background.
When you click on the substrate, everything disappears.

</details>