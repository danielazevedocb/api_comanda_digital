"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../../database/database.service");
let CategoriesService = class CategoriesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createCategoryDto) {
        const existingCategory = await this.prisma.category.findUnique({
            where: { name: createCategoryDto.name },
        });
        if (existingCategory) {
            throw new common_1.ConflictException('Já existe uma categoria com este nome.');
        }
        else {
            return await this.prisma.category.create({ data: createCategoryDto });
        }
    }
    async findAll() {
        return await this.prisma.category.findMany();
    }
    async findOne(id) {
        const category = await this.prisma.category.findUnique({
            where: { id },
            select: { id: true, name: true },
        });
        if (!category) {
            throw new common_1.NotFoundException('Categoria não encontrada.');
        }
        return category;
    }
    async update(id, UpdateCategoryDto) {
        const category = await this.prisma.category.findUnique({
            where: { id },
            select: {
                name: true,
            },
        });
        if (!category) {
            throw new common_1.NotFoundException('Usuário não encontrado');
        }
        return await this.prisma.category.update({
            where: { id },
            data: UpdateCategoryDto,
        });
    }
    async remove(id) {
        const category = await this.prisma.category.findUnique({ where: { id } });
        if (!category) {
            throw new common_1.NotFoundException('Usuário não encontrado');
        }
        return await this.prisma.category.delete({ where: { id } });
    }
};
exports.CategoriesService = CategoriesService;
exports.CategoriesService = CategoriesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.PrismaService])
], CategoriesService);
//# sourceMappingURL=categories.service.js.map