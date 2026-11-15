/* Original teaching material. Examples target Java 21 unless noted. */
const lesson = (id,title,minutes,intro,points,code,output,tip,question,options,answer,explanation) => ({id,title,minutes,intro,points,code,output,tip,quiz:{question,options,answer,explanation}});
window.COURSE = [
{id:'first-steps',title:'Your first steps',level:'Beginner',description:'Meet Java, set up your toolkit, and write your first program.',icon:'01',docs:'https://dev.java/learn/getting-started/',lessons:[
lesson('hello','Hello, Java',8,'Java turns source code into bytecode that runs on the Java Virtual Machine (JVM). The JDK includes tools to compile and run your programs. Start with the classic entry point below; it makes the structure of a Java application easy to see.',['Save this public class in Main.java. Class names are case-sensitive.','Compile with javac Main.java, then run with java Main.','main is the starting point; println prints a line of text.'],`public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}`,`Hello, Java!`,'Install a JDK, then check java --version and javac --version in your terminal. The practice workspace includes a Java 21 runner, so you can start here without installing anything.','Which tool compiles a .java source file?',['java','javac','javadoc'],1,'javac compiles Java source into .class bytecode; java launches the program.'),
lesson('variables','Variables & primitive types',10,'A variable gives a name and a type to a value. Java checks types at compile time, catching many mistakes before your program runs. Choose a type that describes your data and give each variable a meaningful name.',['int stores whole numbers; double stores floating-point numbers.','boolean is true or false; char holds one UTF-16 code unit.','Use final when a variable should be assigned only once.'],`int seats = 24;
double ticketPrice = 12.5;
boolean soldOut = false;
final int MAX_SEATS = 30;
System.out.println(seats + 1);`,`25`,'A local variable must be initialized before you read it. var can infer a local variable type from an initializer, but the variable still has one fixed type.','Which declaration represents a true/false value?',['int ready = 1;','boolean ready = true;','String ready = "yes";'],1,'boolean has exactly two possible values: true and false.'),
lesson('operators','Numbers, operators & conversion',10,'Expressions combine values and operators to produce a result. Watch the types: dividing two integers performs integer division, even when you later assign the result to a double. Convert one operand first when you need a fraction.',['Use +, -, *, / and % for arithmetic.','Comparison operators return boolean values; && and || short-circuit.','Widening int to double is automatic; narrowing may require a cast.'],`int total = 7;
int people = 2;
System.out.println(total / people);
System.out.println((double) total / people);
System.out.println(total % people);`,`3\n3.5\n1`,'Use BigDecimal or integer minor units for exact money calculations. Binary floating-point cannot represent every decimal fraction exactly.','What is the value of 9 / 2 when both operands are int?',['4','4.5','5'],0,'Integer division truncates toward zero, so 9 / 2 is 4.')
]},
{id:'control-flow',title:'Make your code think',level:'Beginner',description:'Make decisions, repeat actions, and work with user input.',icon:'02',docs:'https://dev.java/learn/language-basics/',lessons:[
lesson('conditions','Decisions with if & switch',12,'Programs make decisions using boolean expressions. Use if for ranges and combinations of conditions. A switch is helpful when choosing among distinct values; switch expressions can return a result directly.',['Braces make the scope of each branch clear.','Order if/else-if conditions from specific to general.','Arrow cases in a switch expression do not fall through.'],`int score = 82;
String result;
if (score >= 80) {
    result = "Great work";
} else {
    result = "Keep practicing";
}
System.out.println(result);`,`Great work`,'Compare strings with equals, not ==. The == operator checks whether two references point to the same object.','Which expression checks that age is between 13 and 19 inclusive?',['age >= 13 || age <= 19','age >= 13 && age <= 19','age > 13 && age < 19'],1,'Both comparisons must be true, including the endpoints.'),
lesson('loops','Loops & repetition',12,'Loops let you repeat work without repeating code. A for loop is useful when you know how many repetitions you need. A while loop repeats as long as a condition remains true. Always make sure the condition can eventually become false.',['A for loop has initialization, condition, and update parts.','break exits a loop; continue moves to the next iteration.','An enhanced for loop visits every element in an array or collection.'],`int total = 0;
for (int day = 1; day <= 5; day++) {
    total += day;
}
System.out.println(total);`,`15`,'Check the first and last iteration by hand. Many loop bugs come from using < where <= was needed, or the other way around.','How often does for (int i = 0; i < 3; i++) run?',['2 times','3 times','4 times'],1,'The body runs with i equal to 0, 1 and 2.'),
lesson('input','Read input & format output',10,'Console applications often ask the user for information. Scanner reads text and numbers from standard input. Separate input, calculation, and output to make your code easier to test and reuse.',['Import java.util.Scanner to read from System.in.','nextLine reads an entire line, while nextInt reads an integer token.','printf formats values; %n inserts a platform-appropriate newline.'],`import java.util.Scanner;
// Inside main:
Scanner input = new Scanner("Maya\\n21\\n");
String name = input.nextLine();
int age = input.nextInt();
System.out.printf("%s is %d.%n", name, age);`,`Maya is 21.`,'After nextInt, the newline may still be waiting. Call nextLine to consume it before reading the next full line.','Which Scanner method reads an entire line?',['next()','nextInt()','nextLine()'],2,'nextLine reads through the end of the current line.')
]},
{id:'data-methods',title:'Work with data',level:'Beginner',description:'Organize values with strings, arrays, and reusable methods.',icon:'03',docs:'https://dev.java/learn/strings/',lessons:[
lesson('strings','Strings & text processing',12,'String represents immutable text: its methods return results without changing the original object. Use it to clean input, search text, and build messages. String indexes start at zero.',['Use equals for content comparison and length() for the UTF-16 length.','strip removes surrounding whitespace; substring selects a range.','StringBuilder is useful when repeatedly appending text.'],`String name = "  java trail  ";
String clean = name.strip().toUpperCase();
System.out.println(clean);
System.out.println("java".equals("JAVA"));`,`JAVA TRAIL\nfalse`,'For user-facing international text, remember that a visible character may use more than one UTF-16 code unit. Use code-point APIs when that distinction matters.','What happens when you call text.toUpperCase()?',['The original String changes','A result String is returned','The program always throws'],1,'Strings are immutable. Assign the returned value if you want to keep it.'),
lesson('arrays','Arrays & indexing',12,'An array holds a fixed number of values of the same type. Arrays are useful when you know the size in advance or want simple indexed access. Read and write values with square brackets.',['The first index is 0 and the last is length - 1.','An array uses the length field, without parentheses.','New int arrays start with zero in every position.'],`int[] scores = {70, 85, 95};
int sum = 0;
for (int score : scores) {
    sum += score;
}
System.out.println(sum);
System.out.println(scores.length);`,`250\n3`,'Accessing an index outside the array bounds throws ArrayIndexOutOfBoundsException. Validate external indexes before using them.','What is the last valid index of an array with length 5?',['5','4','6'],1,'Zero-based indexes run from 0 to 4.'),
lesson('methods','Methods & reusable logic',14,'A method names a piece of behavior. Parameters provide inputs, and a return value provides an output. Small methods with clear responsibilities make programs easier to understand and test.',['The return type describes the result; void means no result is returned.','Java passes arguments by value, including copies of object references.','Overloading uses the same method name with different parameter lists.'],`static int totalPrice(int quantity, int price) {
    return quantity * price;
}
// Inside main:
System.out.println(totalPrice(3, 12));`,`36`,'Keep calculations separate from printing. Returning a value makes it possible to reuse a method in a console program, a website, or a test.','Which keyword sends a result back to the caller?',['break','return','new'],1,'return finishes the method and supplies its return value.')
]},
{id:'oop',title:'Think in objects',level:'Beginner',description:'Model real things with classes, constructors, and encapsulation.',icon:'04',docs:'https://dev.java/learn/classes-objects/',lessons:[
lesson('classes','Classes, objects & constructors',15,'A class describes state and behavior. An object is one instance of that class. Constructors initialize new objects so they begin in a useful state. Each object can have its own field values.',['Create an instance with new followed by a constructor call.','A constructor has the same name as its class and no return type.','this refers to the current instance.'],`class Book {
    String title;
    Book(String title) {
        this.title = title;
    }
}
// Inside main:
Book book = new Book("The Java Journey");
System.out.println(book.title);`,`The Java Journey`,'Prefer objects that enforce valid state at construction. For example, reject a negative price rather than letting it spread through your application.','What does new Book("Trail") create?',['A new class definition','An instance of Book','A static method'],1,'new creates an object and invokes its constructor.'),
lesson('encapsulation','Encapsulation & access control',12,'Encapsulation keeps an object in control of its own state. Private fields hide implementation details. Public methods expose useful operations and provide a place to validate changes.',['private members are accessible within their declaring top-level class context.','public defines the external API; package-private has no access keyword.','A getter does not mean every field also needs a setter.'],`class Counter {
    private int value;
    void increment() { value++; }
    int getValue() { return value; }
}
// Inside main:
Counter counter = new Counter();
counter.increment();
System.out.println(counter.getValue());`,`1`,'Prefer a method such as withdraw(amount) over setBalance(value). The operation can check rules and keep the object valid.','Why make a balance field private?',['To hide all behavior','To control how state is changed','To make it static'],1,'Private state lets methods validate changes and protect invariants.'),
lesson('static','Static, final & enums',12,'Static members belong to a class, rather than to an individual object. Final prevents reassignment of a variable. Enums represent a fixed set of named choices and help avoid mistakes caused by arbitrary strings.',['Use ClassName.member for static members.','A final reference cannot be reassigned, but its object may still be mutable.','An enum is a type: values from other enums cannot be mixed accidentally.'],`enum Status { TODO, IN_PROGRESS, DONE }
// Inside main:
final Status status = Status.IN_PROGRESS;
System.out.println(status);
System.out.println(Math.max(4, 9));`,`IN_PROGRESS\n9`,'Avoid making everything static. Objects are useful when you need independent state, replacement implementations, or clear ownership.','Can a final List reference refer to a mutable list?',['Yes, final prevents reference reassignment','No, final freezes every object','Only if the list is empty'],0,'final controls reassignment of the variable, not mutation of the referenced object.')
]},
{id:'oop-design',title:'Design with confidence',level:'Intermediate',description:'Share behavior and express clear contracts in your programs.',icon:'05',docs:'https://dev.java/learn/inheritance/',lessons:[
lesson('inheritance','Inheritance & polymorphism',15,'Inheritance lets a subclass extend a superclass. Polymorphism means a superclass reference can refer to a subclass object, with overridden instance methods selected at runtime. Use inheritance for a true “is a” relationship.',['extends declares a superclass; Java classes have one direct superclass.','@Override asks the compiler to check the intended override.','Prefer composition when you want to reuse behavior without an is-a relationship.'],`class Animal {
    String sound() { return "..."; }
}
class Cat extends Animal {
    @Override String sound() { return "Meow"; }
}
// Inside main:
Animal pet = new Cat();
System.out.println(pet.sound());`,`Meow`,'Fields and static methods do not use the same dynamic dispatch rules as overridden instance methods. Start with instance-method behavior.','Which sound() runs for Animal pet = new Cat()?',['Animal.sound()','Cat.sound()','Neither'],1,'The runtime object is a Cat, so its overridden instance method runs.'),
lesson('interfaces','Interfaces & abstract classes',15,'An interface describes a contract that different classes can implement. An abstract class can share state and implementation while leaving some behavior unfinished. Program against an interface when callers only need its contract.',['A class can implement several interfaces.','Abstract classes cannot be instantiated directly.','Interfaces can have default and static methods as well as abstract methods.'],`interface Greeter {
    String greet(String name);
}
class FriendlyGreeter implements Greeter {
    public String greet(String name) {
        return "Hi, " + name;
    }
}
// Inside main:
System.out.println(new FriendlyGreeter().greet("Sam"));`,`Hi, Sam`,'A small interface is often easier to implement and test than a large one. Give the caller just the operations it actually needs.','Which keyword connects a class to an interface contract?',['extends for every case','implements','instanceof'],1,'A class implements an interface, while interfaces can extend other interfaces.'),
lesson('records','Records, equality & sealed types',15,'Records are concise data carriers. A record declares its components and gets accessors, a constructor, equals, hashCode, and toString. Sealed types restrict which types may extend or implement them, which is useful for closed domain models.',['Records are final; their component fields are final.','Record immutability is shallow: a mutable component can still change internally.','Equal objects must produce equal hash codes.'],`record Point(int x, int y) {}
// Inside main:
Point a = new Point(2, 3);
Point b = new Point(2, 3);
System.out.println(a.equals(b));
System.out.println(a.x());`,`true\n2`,'Use defensive copies for mutable record components, such as List.copyOf(input). Do not put mutable hash keys into a map and then change their equality-related state.','Which accessor does record Point(int x, int y) generate?',['getX()','x()','readX()'],1,'Record component accessors have the same name as the component.')
]},
{id:'collections',title:'Collections & generics',level:'Intermediate',description:'Choose the right container and write reusable, type-safe code.',icon:'06',docs:'https://dev.java/learn/api/collections-framework/',lessons:[
lesson('lists','Lists, sets & iteration',15,'Collections hold groups of objects. Lists preserve sequence and allow duplicates. Sets model uniqueness. Choose a collection based on the operations and guarantees you need, rather than using the same structure everywhere.',['ArrayList is a common choice for an indexed, resizable sequence.','HashSet does not promise iteration order.','List.of creates an unmodifiable list and rejects null elements.'],`List<String> names = new ArrayList<>();
names.add("Ari");
names.add("Ari");
names.add("Jo");
Set<String> unique = new HashSet<>(names);
System.out.println(names.size());
System.out.println(unique.size());`,`3\n2`,'Most collection classes store objects, not primitive values. Use Integer instead of int as a type argument; Java can box and unbox values.','Which collection models unique values?',['List','Set','StringBuilder'],1,'A Set does not contain duplicate elements, according to its equality rules.'),
lesson('maps','Maps & efficient lookup',14,'A map associates keys with values. It is useful for counts, indexes, and lookup tables. Each key appears at most once; putting a value for an existing key replaces that key’s previous value.',['HashMap makes no iteration-order guarantee.','getOrDefault is useful when a key may not exist.','Use LinkedHashMap for insertion order, TreeMap for sorted keys.'],`Map<String, Integer> counts = new HashMap<>();
for (String word : List.of("java", "code", "java")) {
    counts.merge(word, 1, Integer::sum);
}
System.out.println(counts.get("java"));`,`2`,'containsKey distinguishes an absent key from a present key mapped to null. Better still, avoid ambiguous null values when designing your data model.','What does putting an existing key into a HashMap do?',['Adds a duplicate key','Replaces its associated value','Always throws'],1,'Map keys are unique. The new value replaces the old mapping.'),
lesson('generics','Generics & type bounds',16,'Generics let a class or method work with a type chosen by its caller. The compiler checks the types, reducing casts and runtime surprises. A bounded type parameter restricts which types can be used.',['Use <T> to declare a type parameter.','List<Integer> is not a subtype of List<Number>.','For wildcards, think: producer extends, consumer super.'],`static <T> T first(List<T> items) {
    if (items.isEmpty()) {
        throw new IllegalArgumentException("Empty list");
    }
    return items.get(0);
}
// Inside main:
System.out.println(first(List.of("Java", "Trail")));`,`Java`,'Generics generally use type erasure. You cannot directly create new T() or use a primitive as a type argument.','Which is a valid generic type?',['List<int>','List<Integer>','List<integer>'],1,'Generic type arguments must be reference types; Integer is the int wrapper class.')
]},
{id:'reliable-code',title:'Write reliable code',level:'Intermediate',description:'Handle failure, test behavior, and make debugging a habit.',icon:'07',docs:'https://dev.java/learn/exceptions/',lessons:[
lesson('exceptions','Exceptions & resource safety',15,'An exception signals that normal execution cannot continue. Catch an exception where you can recover or add useful context. Try-with-resources closes AutoCloseable resources even when the body throws.',['Checked exceptions must be caught or declared.','RuntimeException subclasses are unchecked.','Use specific catches; do not silently swallow errors.'],`try {
    int count = Integer.parseInt("twelve");
    System.out.println(count);
} catch (NumberFormatException ex) {
    System.out.println("Please enter a whole number.");
}`,`Please enter a whole number.`,'A finally block usually runs whether the try succeeds or fails, but avoid returning from finally because it can hide exceptions.','What is try-with-resources designed to do?',['Ignore every exception','Close resources automatically','Retry forever'],1,'It closes resources that implement AutoCloseable.'),
lesson('testing','Unit tests & boundary cases',16,'A unit test checks one behavior with a clear input and expected outcome. Test normal cases, boundaries, and invalid inputs. JUnit is a common testing framework; the small example below uses JUnit Jupiter and requires a test dependency.',['Arrange the data, act by calling the code, then assert the result.','Keep tests independent and repeatable.','Test observable behavior instead of private implementation details.'],`import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class PriceTest {
    @Test void threeTicketsCostThirty() {
        assertEquals(30, 3 * 10);
    }}`,`JUnit: 1 test passes (with JUnit Jupiter configured).`,'A passing sample is not proof of correctness. Add empty input, zero, negative values where allowed, and values just around each decision boundary.','Which is a useful boundary test for free shipping on totals >= 50?',['Only a total of 1000','Totals of 49, 50, and 51','Only an empty String'],1,'Testing just below, at, and above the threshold exposes comparison mistakes.'),
lesson('debugging','Debugging & readable design',12,'Debugging is a process of narrowing uncertainty. Reproduce the problem, inspect the data, form a hypothesis, and change one thing. A debugger helps you pause at a breakpoint and inspect the call stack and variables.',['Read the first relevant stack-trace frame in your code.','Step into enters a call; step over runs the call without entering it.','Use descriptive names and small methods to reduce debugging effort.'],`int[] values = {10, 20, 30};
// Use <, not <=, to stay inside the array.
for (int i = 0; i < values.length; i++) {
    System.out.println(values[i]);
}`,`10\n20\n30`,'Before optimizing or rewriting, create a small reproducible case. A regression test makes sure the same bug stays fixed.','What should you usually do first after finding a bug?',['Rewrite the whole application','Create a reliable reproduction','Remove the tests'],1,'A reliable reproduction lets you verify the cause and confirm the fix.')
]},
{id:'functional',title:'Functional Java',level:'Intermediate',description:'Transform data with lambdas, streams, and Optional.',icon:'08',docs:'https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/package-summary.html',lessons:[
lesson('lambdas','Lambdas & method references',15,'A lambda provides an implementation for a functional interface: an interface with a single abstract method. Lambdas make it convenient to pass behavior into methods such as sort, filter, and forEach.',['Use parameters -> expression for a short lambda.','Captured local variables must be final or effectively final.','A method reference such as String::length refers to existing behavior.'],`List<String> names = new ArrayList<>(
    List.of("Zo", "Alexander", "May"));
names.sort(Comparator.comparingInt(String::length));
System.out.println(names);`,`[Zo, May, Alexander]`,'Keep lambdas small. If the logic becomes hard to name or read, move it to a method and use a method reference.','What does effectively final mean for a captured local variable?',['It is never reassigned after initialization','It is always static','It has the type Object'],0,'A local variable can be captured when it is not reassigned after its initialization.'),
lesson('streams','Stream pipelines & collectors',18,'A stream describes a computation over data. Build a pipeline from a source, intermediate operations, and a terminal operation. Intermediate operations are lazy: work begins when the terminal operation requests a result.',['filter keeps matching values; map transforms values.','A stream is consumed once; create a fresh stream to process again.','Avoid stateful side effects; parallel is not automatically faster.'],`List<String> names = List.of("Ari", "Maya", "Alexander");
List<String> longNames = names.stream()
    .filter(name -> name.length() > 3)
    .map(String::toUpperCase)
    .toList();
System.out.println(longNames);`,`[MAYA, ALEXANDER]`,'Stream.toList returns an unmodifiable list. Create a new ArrayList from the result if you need a mutable copy.','Which operation is terminal?',['filter','map','count'],2,'count consumes the pipeline and returns a result. filter and map are intermediate operations.'),
lesson('optional','Optional & null safety',14,'Optional represents either one non-null value or no value. It is useful as a return type when absence is expected. Handle both outcomes explicitly instead of calling get without first proving that a value exists.',['Use ofNullable for a possibly-null reference.','map transforms a present value; flatMap avoids nested Optionals.','orElseGet computes a fallback lazily.'],`Optional<String> nickname = Optional.empty();
String greeting = nickname
    .map(name -> "Hi, " + name)
    .orElseGet(() -> "Hi, learner");
System.out.println(greeting);`,`Hi, learner`,'orElse evaluates its argument even when a value is present. Use orElseGet when the fallback is expensive or has side effects.','What does Optional.empty() represent?',['An empty String','The absence of a value','A null Optional reference'],1,'The Optional object exists, but it contains no value.')
]},
{id:'files-time',title:'Files, time & networking',level:'Intermediate',description:'Connect programs to the world beyond a single method.',icon:'09',docs:'https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Files.html',lessons:[
lesson('files','Files, paths & character sets',16,'Path represents a filesystem location. Files provides convenient operations for reading and writing. Text has an encoding: specify UTF-8 when you want the same meaning across environments. File operations can fail, so handle IOException appropriately.',['Use Path.of to build a path.','readString reads the entire file; stream or buffer large files.','A relative path is interpreted against the current working directory.'],`// Imports: java.nio.file.*, java.nio.charset.*
// main declares: throws java.io.IOException
Path path = Path.of("greeting.txt");
Files.writeString(path, "Hello, file!", StandardCharsets.UTF_8);
String text = Files.readString(path, StandardCharsets.UTF_8);
System.out.println(text);`,`Hello, file!`,'Do not build file paths from untrusted input without checking them. A normalized path should still be checked against the intended base directory.','What does Files.readString do?',['Reads a text file into a String','Reads a database table','Compiles a Java file'],0,'It decodes the complete file contents into a String.'),
lesson('time','Dates, time zones & durations',15,'The java.time API separates different meanings of time. LocalDate is a calendar date without a time zone. Instant is a moment on the timeline. ZonedDateTime combines a local date-time with a region’s time-zone rules.',['Use Duration for time-based amounts and Period for calendar amounts.','Use ZoneId rather than assuming every day is exactly 24 hours locally.','The main java.time value types are immutable.'],`LocalDate start = LocalDate.of(2026, 1, 1);
LocalDate deadline = start.plusDays(7);
System.out.println(deadline);
System.out.println(Duration.ofMinutes(90).toHours());`,`2026-01-08\n1`,'For a reproducible test, inject a Clock rather than calling the current time throughout your code.','Which type represents a birthday without a time zone?',['Instant','LocalDate','Duration'],1,'LocalDate represents a calendar date without a time or time zone.'),
lesson('http','HTTP clients & API boundaries',17,'Java includes an HTTP client for communicating with services. A request has a URL, method, headers, and sometimes a body. Inspect the response status before treating the body as success, and handle timeouts and interruptions.',['HttpClient can send synchronously or asynchronously.','Set timeouts and validate response data.','JSON usually needs an additional parser library; do not parse general JSON with string splitting.'],`// Imports: java.net.*, java.net.http.*, java.time.*
// main declares: throws Exception
HttpClient client = HttpClient.newHttpClient();
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://example.com"))
    .timeout(Duration.ofSeconds(10))
    .GET().build();
HttpResponse<String> response = client.send(
    request, HttpResponse.BodyHandlers.ofString());
System.out.println(response.statusCode());`,`Typically 200; the result depends on the server and network.`,'Keep credentials out of source code and logs. Respect an API’s limits, and retry only when the operation and failure type make that safe.','What should you inspect before assuming an HTTP request succeeded?',['The response status code','Only the URL length','The current thread name'],0,'Status codes describe success, redirection, and failures.')
]},
{id:'concurrency',title:'Concurrency & the JVM',level:'Advanced',description:'Understand tasks, shared state, memory, and performance.',icon:'10',docs:'https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Thread.html',lessons:[
lesson('threads','Threads, executors & virtual threads',18,'Concurrency lets multiple tasks make progress during the same period. Executors manage task execution. Java 21 virtual threads make many blocking tasks less expensive to represent, but they do not make CPU-heavy calculations inherently faster.',['Use an executor instead of manually managing many platform threads.','Future.get waits for a task result and can report failure.','Close the executor or otherwise manage its lifetime.'],`// Import: java.util.concurrent.*
// main declares: throws Exception
try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {
    Future<Integer> result = executor.submit(() -> 6 * 7);
    System.out.println(result.get());
}`,`42`,'Virtual threads are best suited to many tasks that spend time waiting for I/O. Keep concurrency bounded when accessing a limited resource such as a database connection pool.','What is a useful workload for virtual threads?',['Many blocking I/O tasks','Only faster integer multiplication','Replacing every collection'],0,'Virtual threads allow many blocking tasks without one operating-system thread per task.'),
lesson('thread-safety','Shared state & thread safety',18,'When threads access the same mutable state, timing can change the result. A data race can cause lost updates or visibility problems. Prefer immutable data and clear ownership; use synchronization when state truly must be shared.',['count++ is a read-modify-write operation, not an atomic update.','synchronized protects a critical section and establishes visibility guarantees.','AtomicInteger offers atomic operations for an integer.'],`// Import: java.util.concurrent.atomic.AtomicInteger
AtomicInteger count = new AtomicInteger(0);
count.incrementAndGet();
count.incrementAndGet();
System.out.println(count.get());`,`2`,'volatile provides visibility and ordering guarantees for a field, but does not make a compound operation such as count++ atomic.','Does volatile int count make count++ atomic?',['Yes','No','Only on weekends'],1,'The increment still consists of separate read, addition, and write steps.'),
lesson('jvm','Memory, garbage collection & profiling',16,'The JVM manages memory and executes bytecode. Garbage collection can reclaim objects that are no longer reachable, but reachable objects you no longer need can still cause memory growth. Measure performance before choosing an optimization.',['Local variables live in method execution frames; objects are managed by the JVM.','GC timing is not a resource-lifecycle guarantee.','Use JDK tools such as Java Flight Recorder to investigate real workloads.'],`List<byte[]> retained = new ArrayList<>();
retained.add(new byte[1024]);
System.out.println(retained.size());
retained.clear();
// No longer retained by this list; collection timing is unspecified.`, `1`,'Close files and sockets explicitly. Garbage collection is about memory, not a reliable way to release external resources.','Can GC reclaim an object that is still strongly reachable?',['Normally yes, immediately','No, it remains live','Only if it is a String'],1,'Strongly reachable objects are live. Holding unnecessary references can keep memory in use.')
]},
{id:'professional',title:'Build real applications',level:'Advanced',description:'Use build tools, databases, modules, and safe application boundaries.',icon:'11',docs:'https://dev.java/learn/modules/',lessons:[
lesson('builds','Packages, Maven & modules',17,'Packages organize types and help avoid naming collisions. Build tools automate compilation, dependency resolution, and tests. Java’s module system adds explicit dependency and export boundaries for larger applications.',['Maven describes a project in pom.xml and uses lifecycle phases.','A common Maven layout is src/main/java and src/test/java.','A module-info.java descriptor declares requires and exports.'],`// module-info.java
module com.example.trail {
    requires java.sql;
    exports com.example.trail.api;
}
// Terminal, from a Maven project:
// mvn test
// mvn package`,`Maven runs tests; package builds the configured artifact.`,'Pin dependency versions, review updates, and avoid copying random binaries into a project. Build tools and JDK versions solve different parts of reproducibility.','Where do Maven unit tests normally go?',['src/main/resources','src/test/java','target/classes'],1,'src/test/java holds test source files in Maven’s standard layout.'),
lesson('jdbc','SQL & JDBC fundamentals',20,'JDBC connects Java code to relational databases through a database driver. Use parameterized SQL for data values. Transactions group changes so they commit together or roll back on failure. The example assumes an existing Connection.',['Use PreparedStatement placeholders for values.','Close statements and result sets with try-with-resources.','A transaction needs explicit commit and rollback handling when auto-commit is off.'],`// conn is a java.sql.Connection; a JDBC driver is required.
String sql = "SELECT name FROM students WHERE id = ?";
try (var statement = conn.prepareStatement(sql)) {
    statement.setInt(1, 42);
    try (var rows = statement.executeQuery()) {
        while (rows.next()) {
            System.out.println(rows.getString("name"));
        }
    }
}`,`The name for student 42, if a matching row exists.`,'Parameters bind data values, not SQL identifiers such as table names. Select dynamic identifiers from an allowlist rather than concatenating untrusted input.','Why use a PreparedStatement with parameters?',['It safely separates bound data from SQL syntax','It removes the need for a database','It makes every query instant'],0,'Parameterized values prevent data from being interpreted as SQL syntax.'),
lesson('secure-design','Validation, logging & application security',17,'Application boundaries accept data you do not control. Validate inputs, use established libraries, and keep dependencies updated. Avoid exposing secrets or detailed internal errors in user-facing responses. Security is a continuing engineering practice.',['Validate length, range, and structure at system boundaries.','Use established password-hashing libraries; never store plaintext passwords.','Log enough context to diagnose failures without logging secrets.'],`static int validateQuantity(int quantity) {
    if (quantity < 1 || quantity > 100) {
        throw new IllegalArgumentException("Quantity must be 1..100");
    }
    return quantity;
}
// Inside main:
System.out.println(validateQuantity(3));`,`3`,'Validation is not a substitute for authorization. Check whether the current user is allowed to access or change the requested resource.','Which information should you avoid logging?',['A request correlation ID','A raw password or API key','An operation duration'],1,'Secrets in logs can be exposed to readers and retained far longer than intended.')
]},
{id:'next-level',title:'From learner to builder',level:'Advanced',description:'Practice algorithms, explore modern Java, and plan a project.',icon:'12',docs:'https://dev.java/learn/',lessons:[
lesson('algorithms','Algorithms & complexity',18,'An algorithm is a sequence of steps for solving a problem. Big-O describes how work or memory grows with input size. It helps compare approaches, but it does not replace measuring real performance.',['A single scan over n items is O(n).','Binary search is O(log n) and requires sorted input.','Consider memory use, input constraints, and correctness as well as speed.'],`static boolean contains(int[] values, int target) {
    for (int value : values) {
        if (value == target) return true;
    }
    return false;
}
// Inside main:
System.out.println(contains(new int[]{2, 5, 8}, 5));`,`true`,'Two independent loops over the same n elements are still O(n). Two nested loops that each traverse all n elements usually do O(n²) work.','What does binary search require?',['A sorted search space','An unsorted HashSet','Exactly ten elements'],0,'Its repeated halving depends on ordering.'),
lesson('modern-java','Pattern matching & modern Java',17,'Modern Java can express data-oriented logic with fewer casts and clearer branches. Java 21 supports pattern matching for instanceof and switch. Learn the core semantics before adopting newer release-specific features.',['A type pattern tests the type and introduces a typed variable.','A switch expression must be exhaustive.','Preview features require explicit opt-in and may change between releases.'],`Object value = "Java Trail";
if (value instanceof String text) {
    System.out.println(text.toUpperCase());
}
String label = switch (value) {
    case String s -> "Text";
    case Integer n -> "Number";
    default -> "Other";
};
System.out.println(label);`,`JAVA TRAIL\nText`,'The coding workspace runs Java 21. Features introduced after Java 21 may not compile there; check the release documentation before using them.','What does value instanceof String text do?',['Always converts any object to String','Tests the type and binds text if it matches','Changes value into a record'],1,'The pattern variable is available in the scope where the type match is known to hold.'),
lesson('project','Plan, build & ship a Java project',15,'Turn a broad idea into a small working program. Start with a command-line task tracker: add a task, list tasks, and mark one done. Expand only after the simplest version works and has meaningful tests.',['Model a Task with an ID, title, and status.','Keep console input, domain logic, and persistence separate.','Write acceptance examples before adding more features.'],`record Task(int id, String title, boolean done) {}
// Inside main:
List<Task> tasks = new ArrayList<>();
tasks.add(new Task(1, "Practice Java", false));
long remaining = tasks.stream()
    .filter(task -> !task.done())
    .count();
System.out.println(remaining);`,`1`,'Your next milestones: validate input, add tests, persist tasks to a file, then try a database or an HTTP interface. Keep a README with setup steps and examples.','What is the best first milestone for a task-tracker project?',['A small working add-and-list flow','A complex microservice deployment','Every feature at once'],0,'A small complete flow gives you fast feedback and a foundation to extend.')
]}
];
const ex=(id,title,level,topic,description,task,signature,starter,tests,hints,solution,related)=>({id,title,level,topic,description,task,signature,starter,tests,hints,solution,related});
window.EXERCISES=[
ex('coffee','The coffee shop bill','Beginner','Variables & operators','A neighborhood café needs a quick way to total an order. Each coffee costs the same amount.','Return the total cost in cents for quantity coffees at priceCents each. Both values are non-negative.','static int total(int quantity, int priceCents)',`static int total(int quantity, int priceCents) {
    // Return the order total in cents.
    return 0;
}`,[["total(3, 450)","1350","3 coffees × 450 cents"],["total(0, 450)","0","No coffees"],["total(2, 375)","750","2 coffees × 375 cents"]],['The total is the number of items multiplied by the price of one item.','Java uses * for multiplication.','Return quantity * priceCents from the method.'],`static int total(int quantity, int priceCents) {
    return quantity * priceCents;
}`,'operators'),
ex('cinema','A seat at the cinema','Beginner','Conditions','A cinema offers a child ticket for ages under 13, a senior ticket for ages 65 and above, and a standard ticket for everyone else.','Return the ticket price: 8 for under 13, 10 for 65+, or 15 otherwise. Ages are non-negative.','static int ticketPrice(int age)',`static int ticketPrice(int age) {
    // Choose the correct ticket price.
    return 0;
}`,[["ticketPrice(12)","8","Child, just below boundary"],["ticketPrice(13)","15","First standard age"],["ticketPrice(64)","15","Last standard age"],["ticketPrice(65)","10","First senior age"]],['Split the ages into three non-overlapping groups.','Test age < 13, then age >= 65.','Return 8 in the first branch, 10 in the second, and 15 otherwise.'],`static int ticketPrice(int age) {
    if (age < 13) return 8;
    if (age >= 65) return 10;
    return 15;
}`,'conditions'),
ex('shipping','Free shipping, fairly','Beginner','Conditions','An online shop charges 5 for delivery. Orders of 50 or more get free shipping. Members also get free shipping, whatever their order total.','Return 0 when total >= 50 or member is true. Otherwise return 5.','static int shipping(int total, boolean member)',`static int shipping(int total, boolean member) {
    // Apply the delivery rules.
    return 5;
}`,[["shipping(49, false)","5","Below threshold"],["shipping(50, false)","0","At threshold"],["shipping(10, true)","0","Member order"],["shipping(0, false)","5","Empty non-member order"]],['There are two independent ways to qualify for free shipping.','The logical OR operator is ||.','Use if (total >= 50 || member) return 0; then return 5.'],`static int shipping(int total, boolean member) {
    return total >= 50 || member ? 0 : 5;
}`,'conditions'),
ex('savings','The savings challenge','Beginner','Loops','A student saves 1 coin on day one, 2 on day two, and so on. Help them find their total after a given number of days.','Return the sum from 1 through days, inclusive. For 0 days, return 0. Inputs are 0..1000.','static int savings(int days)',`static int savings(int days) {
    int total = 0;
    // Add each day's savings to total.
    return total;
}`,[["savings(5)","15","Five days"],["savings(1)","1","One day"],["savings(0)","0","No days"],["savings(10)","55","Ten days"]],['Keep a running total and add each day’s number.','A for loop can start at 1 and continue while day <= days.','Inside the loop use total += day.'],`static int savings(int days) {
    int total = 0;
    for (int day = 1; day <= days; day++) total += day;
    return total;
}`,'loops'),
ex('badge','A friendly name badge','Beginner','Strings','A workshop needs consistent name badges. Attendees sometimes type spaces before or after their names.','Remove surrounding whitespace, convert the name to uppercase, and prefix it with "HELLO, ". Names contain basic Latin letters.','static String badge(String name)',`static String badge(String name) {
    // Clean and format the name.
    return "";
}`,[[`badge("  Maya  ")`,"HELLO, MAYA","Extra spaces"],[`badge("ari")`,"HELLO, ARI","Lowercase name"],[`badge("Jo Lee")`,"HELLO, JO LEE","Keep the inner space"]],['String methods return new strings, so use their results.','strip() removes surrounding whitespace. toUpperCase(Locale.ROOT) gives stable uppercase conversion.','Return "HELLO, " + name.strip().toUpperCase(Locale.ROOT).'],`static String badge(String name) {
    return "HELLO, " + name.strip().toUpperCase(Locale.ROOT);
}`,'strings'),
ex('attendance','Count the full classrooms','Beginner','Arrays & loops','A school records attendance for several classes. It wants to know how many classes have at least 20 students present.','Count the array values >= 20. An empty array should return 0.','static int fullClasses(int[] attendance)',`static int fullClasses(int[] attendance) {
    int count = 0;
    // Check each class.
    return count;
}`,[["fullClasses(new int[]{18, 20, 24, 16})","2","Mixed attendance"],["fullClasses(new int[]{20})","1","Exactly twenty"],["fullClasses(new int[]{})","0","No classes"],["fullClasses(new int[]{10, 12})","0","No full classes"]],['Visit each number and decide whether it reaches the threshold.','Use for (int students : attendance) with an if inside.','Increase count when students >= 20, then return count.'],`static int fullClasses(int[] attendance) {
    int count = 0;
    for (int students : attendance) {
        if (students >= 20) count++;
    }
    return count;
}`,'arrays'),
ex('temperature','A weather station helper','Beginner','Methods & arithmetic','A weather station receives temperatures in Celsius but displays Fahrenheit. Convert the reading without losing the fractional part.','Return celsius * 9.0 / 5.0 + 32. Inputs produce exact results for the supplied cases.','static double fahrenheit(double celsius)',`static double fahrenheit(double celsius) {
    // Convert the temperature.
    return 0.0;
}`,[["fahrenheit(0)","32.0","Freezing point"],["fahrenheit(100)","212.0","Boiling point"],["fahrenheit(-40)","-40.0","Matching scales"]],['The formula is Celsius × 9/5 + 32.','Use decimal operands to avoid integer division.','Return celsius * 9.0 / 5.0 + 32.'],`static double fahrenheit(double celsius) {
    return celsius * 9.0 / 5.0 + 32;
}`,'methods'),
ex('search','Find a library book','Beginner','Arrays & methods','A librarian searches a shelf represented as an array of book titles. The search should match the full title exactly.','Return the index of the first exact match, or -1 when absent. Titles and target are non-null.','static int findBook(String[] titles, String target)',`static int findBook(String[] titles, String target) {
    // Search the titles in order.
    return -1;
}`,[[`findBook(new String[]{"Java", "Design", "Java"}, "Java")`,"0","First duplicate"],[`findBook(new String[]{"Java", "Design"}, "Design")`,"1","Second title"],[`findBook(new String[]{"Java"}, "java")`,"-1","Case-sensitive search"],[`findBook(new String[]{}, "Java")`,"-1","Empty shelf"]],['An indexed loop lets you return a book’s position.','Compare strings with equals rather than ==.','If titles[i].equals(target), return i. After the loop, return -1.'],`static int findBook(String[] titles, String target) {
    for (int i = 0; i < titles.length; i++) {
        if (titles[i].equals(target)) return i;
    }
    return -1;
}`,'arrays'),
ex('account','A careful bank account','Intermediate','Objects & encapsulation','A small account model must reject withdrawals that exceed the balance. Keep the balance private and expose an operation for withdrawals.','Implement the Account class. withdraw returns false for negative or unaffordable amounts, otherwise subtracts the amount and returns true. balance() returns the current balance.','static class Account',`static class Account {
    private int balance;
    Account(int initial) { balance = initial; }
    boolean withdraw(int amount) {
        // Validate, then update the balance.
        return false;
    }
    int balance() { return balance; }
}`,[["withdrawResult(100, 30)","true:70","Affordable withdrawal"],["withdrawResult(100, 120)","false:100","Insufficient funds"],["withdrawResult(100, -5)","false:100","Negative amount"],["withdrawResult(100, 100)","true:0","Exact balance"]],['Check invalid amounts before modifying the balance.','Reject amount < 0 or amount > balance.','After validation, use balance -= amount and return true.'],`static class Account {
    private int balance;
    Account(int initial) { balance = initial; }
    boolean withdraw(int amount) {
        if (amount < 0 || amount > balance) return false;
        balance -= amount;
        return true;
    }
    int balance() { return balance; }
}`,'encapsulation'),
ex('duplicates','Unique workshop attendees','Intermediate','Sets','A registration form sometimes receives the same attendee name twice. Count distinct names while keeping the comparison case-sensitive.','Return the number of unique names in the array. All names are non-null.','static int uniqueCount(String[] names)',`static int uniqueCount(String[] names) {
    // Collect names without duplicates.
    return 0;
}`,[[`uniqueCount(new String[]{"Ari", "Maya", "Ari"})`,"2","Repeated attendee"],[`uniqueCount(new String[]{})`,"0","Empty registration"],[`uniqueCount(new String[]{"ari", "Ari"})`,"2","Case-sensitive names"]],['A Set automatically keeps only unique elements.','Use new HashSet<>(Arrays.asList(names)).','Return the size of that set.'],`static int uniqueCount(String[] names) {
    return new HashSet<>(Arrays.asList(names)).size();
}`,'lists'),
ex('inventory','An inventory lookup','Intermediate','Maps','A shop stores product stock in a map. Missing products should be treated as having no stock, rather than returning null.','Return the mapped quantity for product, or 0 if product is absent. The map has no null values.','static int stock(Map<String, Integer> inventory, String product)',`static int stock(Map<String, Integer> inventory, String product) {
    // Look up stock, with a safe default.
    return 0;
}`,[[`stock(Map.of("pen", 12, "book", 4), "pen")`,"12","Existing product"],[`stock(Map.of("pen", 12), "bag")`,"0","Missing product"],[`stock(Map.of(), "pen")`,"0","Empty inventory"]],['A map lookup may not find the key.','getOrDefault lets you provide a fallback value.','Return inventory.getOrDefault(product, 0).'],`static int stock(Map<String, Integer> inventory, String product) {
    return inventory.getOrDefault(product, 0);
}`,'maps'),
ex('parse','Read a messy age field','Intermediate','Exceptions','A form collects ages as text. Some entries have surrounding spaces, invalid text, or a negative number.','Parse the stripped input. Return -1 for invalid, negative, or overflowing integer input. Input is non-null.','static int parseAge(String input)',`static int parseAge(String input) {
    // Parse, validate, and handle invalid input.
    return -1;
}`,[[`parseAge(" 21 ")`,"21","Surrounding spaces"],[`parseAge("twelve")`,"-1","Invalid text"],[`parseAge("-3")`,"-1","Negative age"],[`parseAge("9999999999999")`,"-1","Integer overflow"]],['Integer.parseInt can throw NumberFormatException.','Call it inside try, then reject negative results.','Catch NumberFormatException and return -1.'],`static int parseAge(String input) {
    try {
        int age = Integer.parseInt(input.strip());
        return age >= 0 ? age : -1;
    } catch (NumberFormatException ex) {
        return -1;
    }
}`,'exceptions'),
ex('cart','Total the affordable items','Intermediate','Streams','A student is browsing a second-hand store. They want the combined price of all items costing at most their per-item budget.','Sum prices <= budget. Prices and budget are non-negative. Use a stream or a loop.','static int affordableTotal(List<Integer> prices, int budget)',`static int affordableTotal(List<Integer> prices, int budget) {
    // Keep affordable prices and sum them.
    return 0;
}`,[["affordableTotal(List.of(10, 25, 5, 40), 20)","15","Two affordable items"],["affordableTotal(List.of(20, 20), 20)","40","Include the boundary"],["affordableTotal(List.of(), 10)","0","Empty list"]],['First filter prices by the budget, then sum the survivors.','mapToInt(Integer::intValue) creates an IntStream with sum().','prices.stream().filter(p -> p <= budget).mapToInt(Integer::intValue).sum()'],`static int affordableTotal(List<Integer> prices, int budget) {
    return prices.stream()
        .filter(p -> p <= budget)
        .mapToInt(Integer::intValue)
        .sum();
}`,'streams'),
ex('deadline','A library return deadline','Intermediate','Dates','A library lends each book for a fixed number of days. Calculate the due date, including month and year changes.','Parse the ISO date, add loanDays, and return the due date as YYYY-MM-DD. Inputs are valid dates and non-negative day counts.','static String dueDate(String borrowedOn, int loanDays)',`static String dueDate(String borrowedOn, int loanDays) {
    // Use java.time rather than manual calendar arithmetic.
    return "";
}`,[[`dueDate("2026-01-28", 7)`,"2026-02-04","Across months"],[`dueDate("2026-12-29", 7)`,"2027-01-05","Across years"],[`dueDate("2024-02-28", 1)`,"2024-02-29","Leap year"]],['LocalDate understands month lengths and leap years.','Parse the input with LocalDate.parse(borrowedOn).','Call plusDays(loanDays), then toString().'],`static String dueDate(String borrowedOn, int loanDays) {
    return LocalDate.parse(borrowedOn).plusDays(loanDays).toString();
}`,'time'),
ex('leaderboard','The study leaderboard','Intermediate','Collections & sorting','A study group displays the top three scores, largest first. The source list must stay unchanged.','Return up to 3 scores in descending order as a List<Integer>. Preserve duplicates.','static List<Integer> topThree(List<Integer> scores)',`static List<Integer> topThree(List<Integer> scores) {
    // Sort a copy or use a stream.
    return List.of();
}`,[["topThree(List.of(70, 95, 80, 90))","[95, 90, 80]","Four scores"],["topThree(List.of(80, 80, 70))","[80, 80, 70]","Keep duplicates"],["topThree(List.of(42))","[42]","Short list"],["topThree(List.of())","[]","Empty list"]],['Do not sort the input in place; List.of is unmodifiable.','A stream can sort, limit, and collect a new list.','Use sorted(Comparator.reverseOrder()).limit(3).toList().'],`static List<Integer> topThree(List<Integer> scores) {
    return scores.stream().sorted(Comparator.reverseOrder()).limit(3).toList();
}`,'streams'),
ex('wordcount','Most-used study word','Advanced','Maps & algorithms','A study notes tool counts words to show how frequently a selected word appears. Ignore letter case and repeated whitespace.','Count exact whitespace-separated occurrences of target, ignoring case. An empty or whitespace-only text has 0 matches. Inputs contain basic Latin letters and whitespace; target is one word.','static int occurrences(String text, String target)',`static int occurrences(String text, String target) {
    // Normalize, split, and count exact matches.
    return 0;
}`,[[`occurrences("Java code java", "JAVA")`,"2","Ignore case"],[`occurrences("   ", "java")`,"0","Whitespace only"],[`occurrences("javascript java", "java")`,"1","Whole words only"],[`occurrences("code  code\\ncode", "code")`,"3","Repeated whitespace"]],['Strip the text first and handle an empty result.','Split on "\\s+" in Java source: the string literal needs two backslashes.','Loop through words and use word.equalsIgnoreCase(target).'],`static int occurrences(String text, String target) {
    String clean = text.strip();
    if (clean.isEmpty()) return 0;
    int count = 0;
    for (String word : clean.split("\\\\s+")) {
        if (word.equalsIgnoreCase(target)) count++;
    }
    return count;
}`,'maps'),
ex('binary','Find a seat quickly','Advanced','Binary search','A theatre keeps its available seat numbers sorted. Find a seat efficiently without checking every entry.','Return the index of target in the sorted distinct array, or -1 if missing. Implement binary search.','static int seatIndex(int[] seats, int target)',`static int seatIndex(int[] seats, int target) {
    int low = 0;
    int high = seats.length - 1;
    // Repeatedly halve the search range.
    return -1;
}`,[["seatIndex(new int[]{2, 5, 8, 12, 17}, 12)","3","Right half"],["seatIndex(new int[]{2, 5, 8}, 2)","0","First element"],["seatIndex(new int[]{2, 5, 8}, 6)","-1","Missing seat"],["seatIndex(new int[]{}, 5)","-1","Empty array"]],['Keep low and high as the inclusive remaining search range.','Compute mid = low + (high - low) / 2. Compare seats[mid] to target.','Move low to mid + 1 or high to mid - 1; return mid on equality.'],`static int seatIndex(int[] seats, int target) {
    int low = 0, high = seats.length - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (seats[mid] == target) return mid;
        if (seats[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}`,'algorithms'),
ex('report','A task tracker report','Advanced','Records & streams','Your task tracker needs a concise report. Each task has a title and a completion flag. Show only unfinished titles, sorted alphabetically.','The supplied Task record has title() and done(). Return a sorted List<String> of unfinished titles. Titles use basic Latin letters.','static List<String> pendingTitles(List<Task> tasks)',`static List<String> pendingTitles(List<Task> tasks) {
    // Filter tasks, extract titles, and sort.
    return List.of();
}`,[[`pendingTitles(List.of(new Task("Study", false), new Task("Build", false), new Task("Read", true)))`,"[Build, Study]","Mixed tasks"],[`pendingTitles(List.of(new Task("Read", true)))`,"[]","All complete"],[`pendingTitles(List.of())`,"[]","No tasks"]],['The Task record is supplied outside your method. Filter on !task.done().','map(Task::title) transforms tasks into their titles.','Finish the pipeline with sorted().toList().'],`static List<String> pendingTitles(List<Task> tasks) {
    return tasks.stream().filter(task -> !task.done())
        .map(Task::title).sorted().toList();
}`,'project')
];
// Helpers are supplied to the exercise harness, never added to the editable draft.
window.EXERCISE_HELPERS={
 account:`static String withdrawResult(int balance, int amount) { Account a = new Account(balance); boolean ok = a.withdraw(amount); return ok + ":" + a.balance(); }`,
 report:`record Task(String title, boolean done) {}`
};
