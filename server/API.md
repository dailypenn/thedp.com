# thedp.com

The standard URL format for JSON data from the front end looks like this:

https://www.thedp.com/section/[SLUG].json
https://www.thedp.com/article/[YYYY]/[MM]/[SLUG].json

This can give you articles with any tag:
https://www.thedp.com/section/[TAG-SLUG].json

So to get the front page data, you'd use
https://www.thedp.com/section/front.json

This can give you info about any object:
https://www.thedp.com/[UUID].json

Get images using the following url:
https://snworksceo.imgix.net/dpn/[ATTACHMENT-UUID].sized-1000x1000.jpg?w=1000

Just make sure to set your Content-Type header to "application/json".
