# Javascript Multi Filter Function
Filtering Array of Object within multiple criteria
You can filter your Javascript array with words or nested objects

# Usage 
an object with keys and params array or nested objects
```
Example:

const data = [
  {
    name: "John",
    location: { long: 38.38, lat: 34.50 }
  },
  {
    name: "Jane",
    location: { long: 33.40, lat: 34.53 }
  },
  {
    name: "Mike",
    location: { long: 18.24, lat: 34.55 }
  }
];

const filter = {
  name: ["John", "Jane"] // or only single ["John"],
  location: { long: 38.38, lat: 34.50 } // or only single { long: 38.38 }
}

multiFilter(data,filter);

```

# LICENSE

MIT License

Copyright (c) 2021 Ali Güzel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
