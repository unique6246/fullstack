// Service Interface
interface MessageService {
    void sendMessage(String message, String recipient);
}

// EmailService: Concrete Implementation of MessageService
class EmailService implements MessageService {
    @Override
    public void sendMessage(String message, String recipient) {
        System.out.println("Email sent to " + recipient + " with message: " + message);
    }
}

// SMSService: Another Implementation of MessageService
class SMSService implements MessageService {
    @Override
    public void sendMessage(String message, String recipient) {
        System.out.println("SMS sent to " + recipient + " with message: " + message);
    }
}

// Consumer Class that depends on MessageService
class Notification {
    private MessageService messageService;

    // Constructor-based Dependency Injection
    public Notification(MessageService messageService) {
        this.messageService = messageService;
    }

    public void send(String message, String recipient) {
        messageService.sendMessage(message, recipient);
    }
}

// Main Class to Demonstrate Dependency Injection
public class DependencyInjectionDemo {
    public static void main(String[] args) {
        // Injecting EmailService Dependency
        MessageService emailService = new EmailService();
        Notification emailNotification = new Notification(emailService);
        emailNotification.send("Hello, Email!", "email@example.com");

        // Injecting SMSService Dependency
        MessageService smsService = new SMSService();
        Notification smsNotification = new Notification(smsService);
        smsNotification.send("Hello, SMS!", "1234567890");
    }
}
