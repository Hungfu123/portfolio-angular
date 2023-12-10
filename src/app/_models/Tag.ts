
export class Tag{

    static readonly ANGULAR = new Tag('Angular', 'rgb(211, 239, 255)');
    static readonly TYPESCRIPT = new Tag('Typescript', 'rgb(211, 239, 255)');
    static readonly SPRING_BOOT = new Tag('Spring Boot', 'rgb(211, 239, 255)');
    static readonly SPRING_SECURITY = new Tag('Spring Security', 'rgb(211, 239, 255)');
    static readonly PYTHON = new Tag('Python', 'rgb(211, 239, 255)');
    static readonly JAVA = new Tag('Java', 'rgb(211, 239, 255)');
    static readonly C = new Tag('C++', 'rgb(211, 239, 255)');
    static readonly SQL = new Tag('SQL', 'rgb(211, 239, 255)');
    static readonly THYMELEAF = new Tag('Thymeleaf', 'rgb(211, 239, 255)');

    private constructor(private readonly key: string, public readonly color: string) {


    }
    toString() {
        return this.key;
    }
}