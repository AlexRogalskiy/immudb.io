
# Getting started with immudb Development

This guide provides developers with the first steps of using immudb from their application and from their favourite programming language:

* Connect to the database
* Insert and retrieve data

::: tip
To learn how to develop for immudb with Python in a guiden online environment, visit the immudb Playground at <https://play.codenotary.com>
:::

<WrappedSection>

## Clients

In the most common scenario, you would perform write and read operations on the database talking to the server. In this case your application will be a client to immudb.

</WrappedSection>

<WrappedSection>

## SDKs

The immudb server manages the requests from the outside world to the store. In order to insert or retrieve data, you need to talk with the server.

SDKs make it comfortable to talk to the server from your favourite language, without having to deal with details about how to talk to it.

<div class="wrapped-picture">

![SDK Architecture](/immudb/immudb-server.svg)

</div>

The most well-known immudb SDK is written in [Golang](https://golang.org/), but there are SDKs available for Python, NodeJS, Java and others.

For other unsupported programming languages, [immugw](/master/immugw/) provides a REST gateway that can be used to talk to the server via generic HTTP.

</WrappedSection>

<WrappedSection>

## Getting immudb running

You may download the immudb binary from [the latest releases on Github](https://github.com/codenotary/immudb/releases/latest). Once you have downloaded immudb, rename it to `immudb`, make sure to mark it as executable, then run it. The following example shows how to obtain v1.0.0 for linux amd64:

```bash
wget https://github.com/vchain-us/immudb/releases/download/v1.0.0/immudb-v1.0.0-linux-amd64
mv immudb-v1.0.0-linux-amd64 immudb
chmod +x immudb

# run immudb in the foreground to see all output
./immudb

# or run immudb in the background
./immudb -d
```

Alternatively, you may use Docker to run immudb in a ready-to-use container. In a terminal type:

```bash
docker run -ti -p 3322:3322 codenotary/immudb:latest
```

(you can add the `-d --rm --name immudb` options to send it to the background).

</WrappedSection>


## Connecting from your programming language

### Importing the SDK

In order to use the SDK, you need to download and import the libraries:

:::: tabs

::: tab Go

```shell script
# Make sure your project is using Go Modules
go mod init example.com/hello
#go get github.com/codenotary/immudb/pkg/client

```go
// Then import the package
import (
	immuclient "github.com/codenotary/immudb/pkg/client"
)
 ```
:::

::: tab Java
Just include immudb4j as a dependency in your project:

if using `Maven`:
```xml
    <dependency>
        <groupId>io.codenotary</groupId>
        <artifactId>immudb4j</artifactId>
        <version>0.9.0.6</version>
    </dependency>
```

if using `Gradle`:
```groovy
    compile 'io.codenotary:immudb4j:0.9.0.6'
```
[Java SDK repository](https://github.com/codenotary/immudb4j)

immudb4j is currently hosted on both [Maven Central] and [Github Packages].

[Github Packages]: https://github.com/orgs/codenotary/packages?repo_name=immudb4j
[Maven Central]: https://search.maven.org/artifact/io.codenotary/immudb4j
:::

::: tab Python
Install the package using pip:

```shell
    pip3 install immudb-py
```

 Then import the client as follows:

```python
    from immudb import ImmudbClient
```

*Note*: immudb-py need `grpcio` module from google. On Alpine linux, you need
 these packages in order to correctly build (and install) grpcio:
 - `linux-headers`
 - `python3-dev`
 - `g++`

[Python SDK repository](https://github.com/codenotary/immudb-py)

:::

::: tab Node.js

Include the immudb-node as a dependency in your project.

```javascript
	const immudbClient = require('immudb-node')
```

[Node.js SDK repository](https://github.com/codenotary/immudb-node)

:::

::: tab .Net

Use Microsoft's [NuGet](https://www.nuget.org/packages/Immudb4DotNet/) package manager to get immudb4DotNet.


Creating a Client.

  - Using the default configuration.
	```csharp
	  var client = new Codenotary.ImmuDb.ImmuClient("localhost"))
	```

  - The immudb implements IDisposable, so you can wrap it with "using".

	```csharp
	using (var client = new Codenotary.ImmuDb.ImmuClient("localhost", 3322)){}
	```

 [.Net SDK repository](https://github.com/codenotary/immudb4dotnet)
:::

::: tab Others
If you're using another language, then read up on our [immugw](/master/immugw/) option.
:::

::::

### Connection and authentication

The first step is to connect to the database, which listens by default in port 3322, authenticate using the default user and password (`immudb / immudb`), and get a token which can be used in subsequent requests:

>Note: You can [change the server default options](reference/configuration.md) using environment variables, flags or the `immudb.toml` configuration file.

:::: tabs

::: tab Go

>Note: the `Login` method will return a token which can be used in subsequent interactions with the server. This token is set on the context metadata.

```go
import (
	"log"
	"context"
	immuclient "github.com/codenotary/immudb/pkg/client"
	"google.golang.org/grpc/metadata"
)

client, err := immuclient.NewImmuClient(client.DefaultOptions())
if err != nil {
    log.Fatal(err)
}
ctx := context.Background()
// login with default username and password and storing a token
lr , err := client.Login(ctx, []byte(`immudb`), []byte(`immudb`))
if err != nil {
    log.Fatal(err)
}
// set up an authenticated context that will be required in future operations
md := metadata.Pairs("authorization", lr.Token)
ctx = metadata.NewOutgoingContext(context.Background(), md)
```
:::

::: tab Java

```java
client = ImmuClient.newBuilder()
    .withServerUrl("localhost")
    .withServerPort(3322)
    .build();
client.login("immudb", "immudb");
```
:::

::: tab Python
```python
from immudb.client import ImmudbClient
ic=ImmudbClient()
ic.login("immudb","immudb")
```
:::

::: tab Node.js
```javascript
const cl = new ImmudbClient();

(async () => {
  try {
    const loginReq: Parameters.Login = { user: 'immudb', password: 'immudb' }
    const loginRes = await cl.login(loginReq)
// ...
} catch (err) {
    console.log(err)
  }
})()
```
:::

::: tab .Net
This feature is not yet supported or not documented.
Do you want to make a feature request or help out? Open an issue on [.Net sdk github project](https://github.com/codenotary/immudb4dotnet/issues/new)
:::

::: tab Others
If you're using another development language, please read up on our [immugw](/master/immugw/) option.
:::

::::

### Tamperproof read and write


:::: tabs

You can write with built-in cryptographic verification. The client implements the mathematical validations, while your application uses a traditional read or write function.

::: tab Go
```go
    vtx, err := client.VerifiedSet(ctx, []byte(`hello`), []byte(`immutable world`))
	if  err != nil {
		log.Fatal(err)
	}
	fmt.Printf("Set and verified key '%s' with value '%s' at tx %d\n", []byte(`hello`), []byte(`immutable world`), vtx.Id)

	ventry, err := client.VerifiedGet(ctx, []byte(`hello`))
	if  err != nil {
		log.Fatal(err)
	}
	fmt.Printf("Sucessfully verified key '%s' with value '%s' at tx %d\n", ventry.Key, ventry.Value, ventry.Tx)
```

:::

::: tab Java
This feature is not yet supported or not documented.
Do you want to make a feature request or help out? Open an issue on [Java sdk github project](https://github.com/codenotary/immudb4j/issues/new)
:::

::: tab Python
This feature is not yet supported or not documented.
Do you want to make a feature request or help out? Open an issue on [Python sdk github project](https://github.com/codenotary/immudb-py/issues/new)
:::

::: tab Node.js
This feature is not yet supported or not documented.
Do you want to make a feature request or help out? Open an issue on [Node.js sdk github project](https://github.com/codenotary/immudb-node/issues/new)
:::

::: tab .Net
This feature is not yet supported or not documented.
Do you want to make a feature request or help out? Open an issue on [.Net sdk github project](https://github.com/codenotary/immudb4dotnet/issues/new)
:::

::: tab Others
If you're using another development language, please read up on our [immugw](/master/immugw/) option.
:::

::::

<WrappedSection>

## SQL Operations with the Go SDK

In order to use SQL from the Go SDK, you create a immudb client and login to the server like usual. First make sure you import:

```
"github.com/codenotary/immudb/pkg/api/schema"
"github.com/codenotary/immudb/pkg/client"
"google.golang.org/grpc/metadata"
```

Then you can create the client and login to the database:

```go
c, err := client.NewImmuClient(client.DefaultOptions())
	if err != nil {
		log.Fatal(err)
	}

	ctx := context.Background()

	lr, err := c.Login(ctx, []byte(`immudb`), []byte(`immudb`))
	if err != nil {
		log.Fatal(err)
	}

	md := metadata.Pairs("authorization", lr.Token)
	ctx = metadata.NewOutgoingContext(ctx, md)
```

To perform SQL statements, use the `SQLExec` function, which takes a `SQLExecRequest` with a SQL operation:

```go
	_, err = c.SQLExec(ctx, `
		BEGIN TRANSACTION
          CREATE TABLE people(id INTEGER, name VARCHAR, salary INTEGER, PRIMARY KEY id);
          CREATE INDEX ON people(name)
		COMMIT
	`, map[string]interface{}{})
		if err != nil {
		log.Fatal(err)
	}
```

This is also how you perform inserts:

```go
	_, err = c.SQLExec(ctx, "UPSERT INTO people(id, name, salary) VALUES (@id, @name, @salary);", map[string]interface{}{"id": 1, "name": "Joe", "salary": 1000})
	if err != nil {
		log.Fatal(err)
	}
```

Once you have data in the database, you can use the `SQLQuery` method of the client to query.

Both `SQLQuery` and `SQLExec` allows named parameters. Just encode them as `@param` and pass `map[string]{}interface` as values:

```go
	res, err := c.SQLQuery(ctx, "SELECT t.id as d,t.name FROM (people AS t) WHERE id <= 3 AND name = @name", map[string]interface{}{"name": "Joe"}, true)
	if err != nil {
		log.Fatal(err)
	}
```

`res` is of the type `*schema.SQLQueryResult`. In order to iterate over the results, you iterate over `res.Rows`. On each iteration, the row `r` will have a member `Values`, which you can iterate to get each column.

```go
	for _, r := range res.Rows {
		for _, v := range r.Values {
			log.Printf("%s\n", schema.RenderValue(v.Value))
		}
	}
```

### Additional resources

  - Get the [immudb-client-example code](https://github.com/codenotary/immudb-client-examples)

</WrappedSection>
