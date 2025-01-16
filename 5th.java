// Example Bean Interface to Represent Lifecycle
interface Bean {
    void initialize();  // Simulate bean initialization
    void destroy();     // Simulate bean destruction
}

// Example Service Class with Lifecycle and Dependencies
class MyService implements Bean {
    private String name;
    private MyDependency dependency;

    // Constructor with Dependency Injection
    public MyService(String name, MyDependency dependency) {
        this.name = name;
        this.dependency = dependency;
    }

    @Override
    public void initialize() {
        System.out.println("Initializing MyService: " + name);
    }

    @Override
    public void destroy() {
        System.out.println("Destroying MyService: " + name);
    }

    public void performTask() {
        System.out.println("Performing task in MyService: " + name);
        dependency.execute();
    }
}

// A Simple Dependency Class
class MyDependency {
    public void execute() {
        System.out.println("Executing task in MyDependency");
    }
}

// Bean Factory to Handle Bean Configuration and Management
class BeanFactory {
    private MyService singletonBean;

    // Create a Singleton Bean
    public MyService getSingletonService(String name) {
        if (singletonBean == null) {
            MyDependency dependency = new MyDependency();
            singletonBean = new MyService(name, dependency);
            singletonBean.initialize(); // Simulate lifecycle initialization
        }
        return singletonBean;
    }

    // Create a Prototype Bean
    public MyService createPrototypeService(String name) {
        MyDependency dependency = new MyDependency();
        MyService service = new MyService(name, dependency);
        service.initialize(); // Simulate lifecycle initialization
        return service;
    }

    // Destroy Singleton Bean
    public void destroySingleton() {
        if (singletonBean != null) {
            singletonBean.destroy(); // Simulate lifecycle destruction
            singletonBean = null;
        }
    }
}

// Main Class to Demonstrate Features
public class BeanManagementDemo {
    public static void main(String[] args) {
        BeanFactory factory = new BeanFactory();

        // Create and Use Singleton Bean
        MyService singletonService = factory.getSingletonService("SingletonService");
        singletonService.performTask();

        // Create and Use Prototype Bean
        MyService prototypeService1 = factory.createPrototypeService("PrototypeService1");
        prototypeService1.performTask();

        MyService prototypeService2 = factory.createPrototypeService("PrototypeService2");
        prototypeService2.performTask();

        // Destroy Singleton Bean
        factory.destroySingleton();
    }
}
