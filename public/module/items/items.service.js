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
exports.ItemsService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../../database/database.service");
let ItemsService = class ItemsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createItemDto) {
        const exitingItem = await this.prisma.item.findFirst({
            where: { product_id: createItemDto.product_id },
        });
        if (exitingItem) {
            throw new common_1.ConflictException('Já existe um item com este id.');
        }
        else {
            return this.prisma.item.create({ data: createItemDto });
        }
    }
    async findAll() {
        return this.prisma.item.findMany();
    }
    async findOne(id) {
        const item = await this.prisma.item.findFirst({
            where: { id },
            select: {
                id: true,
                amount: true,
                order_id: true,
                product_id: true,
            },
        });
        if (!item) {
            throw new common_1.NotFoundException('Item não encontrado.');
        }
        return item;
    }
    async update(id, updateItemDto) {
        const item = await this.prisma.item.update({
            where: { id },
            data: {
                amount: updateItemDto.amount,
            },
        });
        if (!item) {
            throw new common_1.NotFoundException('Item não encontrado.');
        }
        return item;
    }
    async remove(id) {
        const item = await this.prisma.item.delete({ where: { id } });
        if (!item) {
            throw new common_1.NotFoundException('Item não encontrado.');
        }
        return item;
    }
};
exports.ItemsService = ItemsService;
exports.ItemsService = ItemsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.PrismaService])
], ItemsService);
//# sourceMappingURL=items.service.js.map