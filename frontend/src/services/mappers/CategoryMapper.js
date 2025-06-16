class CategoryMapper {
  toPersistence(domainCategory) {
    return {
      id: domainCategory.id,
      name: domainCategory.name,
      color: domainCategory.color,
      description: domainCategory.description,
    };
  }

  toDomain(persistenceCategory) {
    return {
      id: persistenceCategory.id,
      name: persistenceCategory.name,
      color: persistenceCategory.color,
      description: persistenceCategory.description,
    };
  }
}

export default new CategoryMapper();
