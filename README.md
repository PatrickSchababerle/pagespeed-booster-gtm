
# Pagespeed Booster

Improve your Time to Interactive Score with one simple movement.

## Why should I be using Pagespeed Booster?

Too many tags in your Google Tag Manager container are increasing the TTI (Time to Interactive) in your Google Pagespeed Score. You can easily improve this by deferring these tags to be loaded after a certain amount of time.

Even if you only have a Google Analytics Universal Analytics and a Google Analytics 4 tag installed at the same time, you will be able to see the improvement effect directly in the Pagespeed analysis.

## Installation

Follow these simple steps to use the Pagespeed Booster.

#### Tag

1. Download the template from the [Template Gallery](https://tagmanager.google.com/gallery/#/?page=1)
2. Install the template in your Google Tag Manager Container
3. Create a new tag from the installed template
4. Save the tag

#### Trigger

3. Create a new trigger of type "Custom Event"
4. Fill "pagespeed_booster" into the input
5. Fill in a name (f.e. "pagespeed_booster")
6. Save the trigger
## Settings

| Parameter | Type     | Description                | Default                |
| :-------- | :------- | :------------------------- | :------------------------- |
| `Delay` | `decimal` | **Required**. Time in seconds to delay the tags | 1.5 |
| `Name` | `string` | Optional. Rename the event on your preferences | pagespeed_booster |


#### Customization

You can change these setting within the Pagespeed Booster tag.

## Usage

You can use your newly created trigger for all tags which should be deferred. Just add them to your the tags.


## Authors

- [Patrick Schababerle](https://www.github.com/PatrickSchababerle)

